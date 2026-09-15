export interface EngineeringMetric {
  id: string;
  metric: string;
  before: string;
  after: string;
  change: string;
  changeLabel: string;
  headline: string;
  description: string;
  technicalContext: string;
}

export interface WhatBrokeItem {
  number: string;
  broken: string;
  brokenContext: string;
  changed: string;
  changedSolution: string;
  keyTakeaway: string;
}

export interface PhilosophyPillar {
  number: string;
  title: string;
  statement: string;
  elaboration: string;
}

export interface TechStackCategory {
  category: string;
  items: {
    name: string;
    note?: string;
  }[];
}

export const performanceMetrics: EngineeringMetric[] = [
  {
    id: "payload-reduction",
    metric: "LEDGER PAYLOAD SIZE",
    before: "2.3 MB",
    after: "~5 KB",
    change: "~99.8%",
    changeLabel: "Payload reduction",
    headline: "Offloading compute to MongoDB aggregation pipelines",
    description:
      "Previously, historical ledger queries serialized thousands of raw invoice documents across the wire for client-side balance aggregation. Replaced with server-side pipeline projection and bounded key-set pagination.",
    technicalContext:
      "$facet aggregation with strict projection bounds streaming only the requested 25-record slice plus calculated running totals.",
  },
  {
    id: "cold-start-query",
    metric: "COLD-START LEDGER QUERY",
    before: "128.38 ms",
    after: "34.64 ms",
    change: "~73%",
    changeLabel: "Query latency reduction",
    headline: "Compound indexing over customer tenancy and chronology",
    description:
      "Customer ledger lookups were executing unindexed collection scans during fiscal reconciliations. Introduced compound index over { tenantId: 1, customerId: 1, transactionDate: -1 }.",
    technicalContext:
      "Index-covered queries eliminate in-memory sorting and disk document fetches for initial ledger views.",
  },
  {
    id: "paginated-path",
    metric: "PAGINATED PATH LATENCY",
    before: "56.01 ms",
    after: "23.02 ms",
    change: "~59%",
    changeLabel: "Latency reduction on scroll/next",
    headline: "Eliminating offset cursor scanning with key-set pagination",
    description:
      "Skipping large offsets (e.g. skip: 500) degraded latency on active wholesale customers with hundreds of annual invoices. Switched to deterministic cursor queries using transaction timestamp delimiters.",
    technicalContext:
      "Cursor filter: { _id: { $lt: lastSeenId }, transactionDate: { $lte: lastSeenDate } } guarantees O(1) query time regardless of page depth.",
  },
];

export const whatBrokeSequence: WhatBrokeItem[] = [
  {
    number: "01",
    broken: "LEDGER FRAGMENTATION",
    brokenContext:
      "Invoices, counter receipts, return credit notes, and manual ledger adjustments were stored in separate database collections with independent balance state.",
    changed: "UNIFIED CHRONOLOGICAL LEDGER",
    changedSolution:
      "Consolidated all financial balance modifications into an immutable chronological event ledger. Every financial action appends a signed entry, guaranteeing mathematically provable running balances.",
    keyTakeaway:
      "Derived balance caches will always drift eventually. Single-source event streams guarantee consistency across all documents.",
  },
  {
    number: "02",
    broken: "INVENTORY DRIFT AFTER INVOICE EDITS",
    brokenContext:
      "When operators retroactively edited lines or quantities on a drafted bill, stock counts in physical warehouse bins diverged from system totals.",
    changed: "ATOMIC DELTA-BASED STOCK MUTATIONS",
    changedSolution:
      "Implemented a two-phase diff calculation that evaluates the exact signed delta of each line item and applies atomic increment/decrement operations within a database transaction.",
    keyTakeaway:
      "Never recalculate state by wiping and re-adding. Calculate the exact delta and mutate atomically.",
  },
  {
    number: "03",
    broken: "DUPLICATE FINANCIAL REQUESTS",
    brokenContext:
      "Warehouse operators on spotty connections frequently double-clicked 'Save & Print Invoice', occasionally generating duplicate invoice numbers and double charges.",
    changed: "IDEMPOTENT REQUEST IDENTIFIERS",
    changedSolution:
      "Added client-generated UUID idempotency keys to mutation headers, guarded by in-memory lock keys and unique index constraints at the persistence layer.",
    keyTakeaway:
      "The network will fail, and users will click twice. Idempotency must be enforced at the API boundary.",
  },
  {
    number: "04",
    broken: "LARGE REPORT PAYLOADS",
    brokenContext:
      "Generating quarterly customer statements for high-volume pharmacies transferred megabytes of raw documents, causing mobile browsers to stutter and drop frames.",
    changed: "MONGODB AGGREGATION + BOUNDED PAGINATION",
    changedSolution:
      "Replaced document serialization with targeted server-side $facet pipelines and bounded key-set pagination, dropping transmission payloads from 2.3 MB down to ~5 KB.",
    keyTakeaway:
      "Filter and aggregate on the database server. Send only what the viewport immediately requires.",
  },
  {
    number: "05",
    broken: "SENSITIVE EMPLOYEE & MARGIN EXPOSURE",
    brokenContext:
      "Dispatch staff needed access to stock items for order picking, but default query endpoints inadvertently exposed distributor purchase costs and proprietor profit margins.",
    changed: "BACKEND RBAC + ROLE-AWARE DATA ISOLATION",
    changedSolution:
      "Built declarative middleware filtering projections at the query level. Wholesale purchase rates are completely excluded from the payload before leaving the server for warehouse roles.",
    keyTakeaway:
      "UI-level field hiding is cosmetic, not secure. Authorization belongs strictly at the database query boundary.",
  },
  {
    number: "06",
    broken: "BATCH STOCK COMPLEXITY & EXPIRY RISK",
    brokenContext:
      "Pharmaceuticals arrive in varying batch numbers with distinct expiry dates. Manual batch selection led to picking near-expiry goods out of order.",
    changed: "BATCH LEDGER + AUTOMATED FIFO ALLOCATION",
    changedSolution:
      "Designed an automated FIFO (First-In, First-Out) batch queue that sorts lots by earliest expiration date, automatically allocating outgoing carton quantities across batches upon line entry.",
    keyTakeaway:
      "Domain compliance cannot rely on operator memory. Automate physical warehouse constraints directly into software defaults.",
  },
];

export const engineeringPhilosophy: PhilosophyPillar[] = [
  {
    number: "01",
    title: "DATA INTEGRITY",
    statement: "Financial and operational systems must remain consistent when workflows fail.",
    elaboration:
      "A partial database write is worse than no write at all. In multi-step operations like invoice generation or seat reservation, consistency is non-negotiable. I rely on atomic multi-document transactions, immutable ledger streams, and idempotent request handling.",
  },
  {
    number: "02",
    title: "SECURITY",
    statement: "Authorization belongs at the API and data layer, not just in the UI.",
    elaboration:
      "Hiding a button in the browser does not protect an endpoint. I treat every client request as untrusted, enforcing strict token validation, role-based access control (RBAC), and tenant data isolation at the middleware and query level.",
  },
  {
    number: "03",
    title: "PERFORMANCE",
    statement: "Measure the bottleneck before optimizing it.",
    elaboration:
      "Premature optimization creates tangled code, but blind architecture creates multi-megabyte payloads and locking bottlenecks. I benchmark cold-start query latency, examine index explain plans, and stream bounded data slices before declaring a route production-ready.",
  },
  {
    number: "04",
    title: "PRODUCT",
    statement: "Features become better when real people use them.",
    elaboration:
      "Software built in isolation assumes ideal user behavior. Real users press buttons twice, have intermittent 3G connections, and make retroactive edits to finalized invoices. Observing genuine operators in action is the only true source of software refinement.",
  },
  {
    number: "05",
    title: "ITERATION",
    statement: "Shipping is the beginning of product development, not the end.",
    elaboration:
      "A feature is not done when the code merges; it is done when it survives edge cases in daily operations. Building Bharat Enterprise from a single billing screen into a multi-tenant business SaaS proved that deliberate, continuous iteration always beats rigid speculative design.",
  },
];

export const techStackCategories: TechStackCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript" },
      { name: "Java" },
      { name: "Python" },
      { name: "C / C++" },
      { name: "HTML / CSS" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Material UI" },
      { name: "EJS / Recharts" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "JWT Auth / bcrypt" },
      { name: "Server-Sent Events (SSE)" },
    ],
  },
  {
    category: "Data",
    items: [
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "Aggregation Pipelines" },
      { name: "ACID Transactions" },
      { name: "MySQL" },
    ],
  },
  {
    category: "Engineering",
    items: [
      { name: "RBAC & Multi-Tenancy" },
      { name: "FIFO Batch Allocation" },
      { name: "Idempotent Handling" },
      { name: "Performance Optimization" },
      { name: "API Security & Caching" },
    ],
  },
  {
    category: "Infrastructure / Tools",
    items: [
      { name: "Docker" },
      { name: "Git / GitHub" },
      { name: "Vercel / Render" },
      { name: "MongoDB Atlas" },
      { name: "Razorpay" },
    ],
  },
];
