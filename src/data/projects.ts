export type ProjectType = "real-world-product" | "independent" | "academic" | "personal";

export interface ProjectMetric {
  before: string;
  after: string;
  label: string;
  detail: string;
  highlight?: string;
}

export interface ProjectArchitectureDecision {
  number: string;
  problem: string;
  impact: string;
  solution: string;
  technicalDetails: string;
}

export interface Project {
  slug: string;
  title: string;
  headline: string;
  category: ProjectType;
  categoryLabel: string;
  role: string;
  timeline: string;
  summary: string;
  description: string;
  origin?: {
    type: string;
    domain: string;
    firstUser: string;
    adoption: string;
  };
  features: string[];
  evolution?: string[];
  metrics?: ProjectMetric[];
  architectureDecisions?: ProjectArchitectureDecision[];
  stack: {
    frontend: string[];
    backend: string[];
    database: string[];
    infrastructure: string[];
  };
  links: {
    live: string;
    github: string;
  };
  sections: {
    overview: string;
    theProblem: string;
    whatIBuilt: string;
    keyDecisions: string;
    architecture: string;
    dataAndSecurity: string;
    whatILearned: string;
  };
}

export const bharatEnterprise: Project = {
  slug: "bharat-enterprise",
  title: "Bharat Enterprise",
  headline: "Billing & Business Operations SaaS",
  category: "real-world-product",
  categoryLabel: "REAL-WORLD PRODUCT",
  role: "Independent Full-Stack Developer",
  timeline: "Dec 2025 – Present",
  summary: "Built from the workflow needs of a real pharmaceutical distributor.",
  description:
    "An independently developed operational SaaS platform managing complex pharmaceutical wholesale operations: dual-entry customer ledgers, batch-level FIFO inventory, automated collections tracking, and multi-tenant isolation.",
  origin: {
    type: "real-business-workflow",
    domain: "Pharmaceutical wholesale & distribution",
    firstUser: "Active regional pharmaceutical distributor",
    adoption: "Integrated directly into live daily billing and dispatch operations",
  },
  features: [
    "INVOICING",
    "CUSTOMER LEDGER",
    "COLLECTIONS",
    "PURCHASING",
    "INVENTORY",
    "BATCH / FIFO",
    "RBAC",
    "MULTI-TENANCY",
    "SAAS",
  ],
  evolution: [
    "Billing",
    "Ledger",
    "Inventory",
    "Batch Tracking",
    "Purchasing",
    "Collections",
    "RBAC",
    "Multi-tenancy",
    "SaaS",
  ],
  metrics: [
    {
      before: "2.3 MB",
      after: "~5 KB",
      highlight: "~99.8% payload reduction",
      label: "Ledger Report Payload",
      detail:
        "Replaced unbounded document serialization with indexed aggregation pipelines, server-side projection, and cursor-based pagination.",
    },
    {
      before: "128.38 ms",
      after: "34.64 ms",
      highlight: "~73% faster query",
      label: "Cold-Start Ledger Query",
      detail:
        "Restructured compound indices over customerId, fiscalYear, and transactionDate to avoid full collection scans during reconciliations.",
    },
    {
      before: "56.01 ms",
      after: "23.02 ms",
      highlight: "~59% faster path",
      label: "Paginated Path Latency",
      detail:
        "Eliminated offset-based cursor scanning in favor of deterministic key-set pagination over transaction timestamps.",
    },
  ],
  architectureDecisions: [
    {
      number: "01",
      problem: "Ledger fragmentation across disparate invoices, manual payments, and return notes",
      impact:
        "Customer balances drifted over time, requiring hours of end-of-month manual tallying.",
      solution: "Unified chronological customer ledger",
      technicalDetails:
        "All debits and credits flow through a single immutable event stream with running balance recalculations enforced at the database transaction layer.",
    },
    {
      number: "02",
      problem: "Inventory drift after retrospective invoice edits or cancellations",
      impact:
        "Stock counts in warehouse bins diverged from system totals whenever invoices were modified.",
      solution: "Atomic delta-based stock adjustments",
      technicalDetails:
        "Edits compute exact signed deltas against historical line-items and apply two-phase atomic decrements/increments inside MongoDB transactions.",
    },
    {
      number: "03",
      problem: "Duplicate financial transactions from operator double-clicks or retries",
      impact: "Customers were double-billed or payment vouchers were duplicated during network hiccups.",
      solution: "Idempotent request identifiers",
      technicalDetails:
        "Client generates cryptographic idempotency keys per submission, cached in memory with atomic CAS locks before persisting database mutations.",
    },
    {
      number: "04",
      problem: "Oversized report payloads exhausting client memory on heavy ledgers",
      impact:
        "Loading years of ledger transactions downloaded multi-megabyte payloads, freezing browser rendering.",
      solution: "MongoDB aggregation + bounded pagination",
      technicalDetails:
        "Offloaded running total computations to MongoDB $facet and $project pipelines, streaming strictly bounded 25-record slices.",
    },
    {
      number: "05",
      problem: "Sensitive employee compensation and wholesale margin exposure across operator roles",
      impact: "Warehouse dispatchers could view commercial purchasing margins and proprietor records.",
      solution: "Backend RBAC + role-aware data isolation",
      technicalDetails:
        "Strict middleware guards filter document fields at the projection boundary based on verified JWT role claims, preventing data leakage.",
    },
    {
      number: "06",
      problem: "Complex pharmaceutical expiry dates and batch selection bottlenecks",
      impact:
        "Dispatchers accidentally sold near-expiry batches or fragmented cartons across storage racks.",
      solution: "Batch ledger + automated FIFO allocation",
      technicalDetails:
        "A lot-tracking ledger sorts available quantities by earliest expiry date, auto-allocating dispatch quantities down to batch lots upon line-item entry.",
    },
  ],
  stack: {
    frontend: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    backend: ["Node.js", "Express", "REST APIs", "JWT Auth"],
    database: ["MongoDB", "Mongoose", "Aggregation Pipelines", "Transactions"],
    infrastructure: ["Vercel", "MongoDB Atlas", "Server-Sent Events"],
  },
  links: {
    live: "https://billing-software-sigma.vercel.app/",
    github: "https://github.com/subhankar-das-phantom/Billing-Software",
  },
  sections: {
    overview:
      "Bharat Enterprise began not as an abstract side-project or portfolio piece, but as a direct answer to the operational friction of an active regional pharmaceutical distribution business in West Bengal. The business was struggling with manual paper bills, fragmented customer credit tracking, and stock inaccuracies across hundreds of medical batches. Over continuous development cycles informed by daily warehouse usage, it evolved from a local billing utility into a comprehensive multi-tenant operational SaaS.",
    theProblem:
      "Wholesale pharmaceutical distribution has strict operational constraints: drugs have distinct batch numbers and hard expiration dates; customers (retail pharmacies) operate largely on credit terms with rolling partial payments; and inventory counts must remain completely synchronized across counter sales, bulk shipments, and return vouchers. Off-the-shelf accounting software was either too bloated, too slow on low-bandwidth connections, or unable to enforce strict FIFO batch dispatching without tedious manual overrides.",
    whatIBuilt:
      "A fast, responsive web application combining an intuitive keyboard-first billing interface with robust double-entry financial ledgers and automated lot management. The system tracks every sale, purchase, customer payment, and distributor invoice in a unified data store. It includes comprehensive multi-tenancy, granular role-based access control (Admin, Billing Staff, Warehouse Dispatcher), and instantaneous ledger generation.",
    keyDecisions:
      "Prioritizing data correctness above all else. In a financial system, an edge-case bug that miscalculates a customer balance by 10 rupees destroys operator trust immediately. To solve this, all balance adjustments were moved from client-side state into server-side MongoDB multi-document ACID transactions with atomic delta updates. Every transaction writes an immutable audit record before updating the running balance.",
    architecture:
      "The architecture separates reads and writes for performance. Aggregated financial reports and ledger printouts use server-side aggregation pipelines ($facet, $bucket, $project) with compound index coverage. Real-time updates utilize lightweight Server-Sent Events (SSE) to notify operators of batch depletion. Multi-tenancy is enforced at the query layer via tenant-scoping middleware.",
    dataAndSecurity:
      "Sensitive profit margins and distributor purchase costs are stripped at the API layer for non-administrative roles. Authentication uses short-lived JWT tokens with secure cookie storage, and every API route validates permissions using declarative RBAC middleware. Database connections are pooled and tuned for high concurrency during peak morning billing rushes.",
    whatILearned:
      "Shipping software to real people teaches you lessons you can never learn in tutorials: operators hate reaching for the mouse, network connections in warehouses will drop mid-request, and retroactively editing an invoice is ten times harder to model than creating one. Real engineering is about making complex domain rules effortless and bulletproof for the person using the screen.",
  },
};

export const accountly: Project = {
  slug: "accountly",
  title: "Accountly",
  headline: "Financial Transparency for Shared Contributions",
  category: "independent",
  categoryLabel: "INDEPENDENT PROJECT",
  role: "Lead Full-Stack Developer",
  timeline: "2024",
  summary:
    "An evolution of the personal-finance architecture into a product for transparent shared financial activity.",
  description:
    "A collaborative financial ledger designed for organizations, clubs, and pooled initiatives requiring public transparency, immutable contribution audit trails, and automated verification checks.",
  features: [
    "ORGANIZATIONS",
    "CONTRIBUTORS",
    "PUBLIC TRANSPARENCY",
    "AUDIT LOGS",
    "INTEGRITY CHECKS",
    "REPORTING",
  ],
  stack: {
    frontend: ["React", "JavaScript", "Tailwind CSS"],
    backend: ["Node.js", "Express", "REST APIs", "JWT"],
    database: ["MongoDB", "Mongoose"],
    infrastructure: ["Vercel", "MongoDB Atlas"],
  },
  links: {
    live: "https://accountly-phi.vercel.app/#/login",
    github: "https://github.com/subhankar-das-phantom/Accountly",
  },
  sections: {
    overview:
      "Accountly was born out of a recurring real-world trust dilemma: groups, college committees, and community funds collecting shared contributions with zero verifiable visibility for contributors into how money is received and spent. Building on the core ledger mechanics developed in the Personal Finance Tracker, Accountly scaled the architecture to support multi-member organizations with public verification portals.",
    theProblem:
      "Most group money tracking relies on informal WhatsApp messages, spreadsheets that anyone can edit or delete, or opaque bank accounts managed by a single individual. Contributors have no guarantee that collected funds match the ledger, and administrators spend excessive time answering inquiries and producing manual receipts.",
    whatIBuilt:
      "A platform allowing administrators to create organizations, log verified contributor payments, track categorized expenses with receipt attachments, and generate public-facing read-only audit dashboards where every contributor can independently verify the fund's exact financial state.",
    keyDecisions:
      "Implementing an immutable append-only transaction log. In Accountly, financial records cannot be silently updated or removed. If an error occurs, an explicit reversing entry must be recorded, preserving complete audit history and ensuring integrity checks pass at all times.",
    architecture:
      "Designed with a clear separation between private administrative mutation endpoints and high-performance public read routes. Public dashboard queries are cached aggressively and stripped of private personal identifiers while preserving mathematical integrity.",
    dataAndSecurity:
      "Role-based access separating Org Owners, Treasurers, and Public Viewers. Cryptographic checksums verify that historical ledger records have not been tampered with directly in the database.",
    whatILearned:
      "Designing for shared trust requires an entirely different mental model than single-user budgeting. Public transparency demands rigorous validation, human-readable audit reasons, and bulletproof aggregate consistency.",
  },
};

export const personalFinanceTracker: Project = {
  slug: "personal-finance-tracker",
  title: "Personal Finance Tracker",
  headline: "Built Because Notes Were Not Enough",
  category: "personal",
  categoryLabel: "PERSONAL PROJECT",
  role: "Full-Stack Developer",
  timeline: "Sep 2025 – Nov 2025 · Ongoing maintenance & updates",
  summary: "Built out of daily personal necessity when ad-hoc spreadsheets proved insufficient.",
  description:
    "A privacy-conscious personal budgeting and expense tracking engine featuring category analytics, Excel import/export pipelines, recurring expense automation, and multi-account balance reconciliation.",
  features: [
    "Income Tracking",
    "Expense Categorization",
    "Budgets",
    "Visual Analytics",
    "Reports",
    "Excel Import/Export",
    "Security",
  ],
  stack: {
    frontend: ["React", "CSS Modules", "Chart.js"],
    backend: ["Node.js", "Express", "REST APIs"],
    database: ["MongoDB", "Mongoose"],
    infrastructure: ["Vercel", "Render"],
  },
  links: {
    live: "https://personal-finance-tracker-black-pi.vercel.app/#/login",
    github: "https://github.com/subhankar-das-phantom/personal-finance-tracker",
  },
  sections: {
    overview:
      "The Personal Finance Tracker was Subhankar's foundational full-stack project, built to solve his own daily frustration with fragmented note-taking apps and cumbersome spreadsheets. It established the core data models for transaction reconciliation that later informed both Accountly and Bharat Enterprise.",
    theProblem:
      "Existing mobile budgeting apps are either laden with intrusive advertisements, lock historical data export behind paywalls, or fail to handle multi-category splits and custom fiscal monthly periods.",
    whatIBuilt:
      "A full-featured personal financial control center supporting granular expense categorization, custom budget thresholds with alert indicators, visual trend breakdowns, and frictionless two-way Excel data transfer.",
    keyDecisions:
      "Building a dedicated client/server Excel import/export processor using sheetjs to ensure the user retains complete data sovereignty and can backup or analyze records locally at any time.",
    architecture:
      "Single-page application consuming RESTful API endpoints. Expense categorization queries leverage MongoDB indexing on userId and date for sub-second report generation.",
    dataAndSecurity:
      "JWT-based user authentication with encrypted password hashing via bcrypt. Data isolation guarantees that no user's financial telemetry or records can ever intersect with another account.",
    whatILearned:
      "Building a product that you personally use every single day provides the ultimate feedback loop. It exposes UX friction immediately and instills a deep respect for data resilience—because if your personal records get corrupted, you feel the pain firsthand.",
  },
};

export const evora: Project = {
  slug: "evora",
  title: "EVORA",
  headline: "Event Discovery & Reservation Platform",
  category: "academic",
  categoryLabel: "ACADEMIC PROJECT",
  role: "Full-Stack Engineer & Team Lead",
  timeline: "May 2026 – Aug 2026 · Academic Project",
  summary:
    "A structured academic engineering project focused on high-concurrency seat reservation algorithms, QR pass generation, and role-based event management.",
  description:
    "Developed as an academic capstone to explore distributed booking workflows, transactional seat locking, QR code ticket validation, and administrative event analytics.",
  features: [
    "Event Discovery",
    "Booking Workflows",
    "RBAC Permissions",
    "Atomic Seat Allocation",
    "QR Tickets",
    "Admin Workflows",
  ],
  stack: {
    frontend: ["React", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express", "REST APIs"],
    database: ["MongoDB", "Mongoose"],
    infrastructure: ["Vercel", "Render"],
  },
  links: {
    live: "https://evora-drab.vercel.app/",
    github: "https://github.com/subhankar-das-phantom/Evora",
  },
  sections: {
    overview:
      "EVORA was engineered as an academic project at RICIS Institutions to demonstrate advanced full-stack architectural concepts: handling concurrent reservation requests without race conditions, generating cryptographic QR tickets, and implementing multi-tiered administrative access for event organizers.",
    theProblem:
      "Online ticketing systems face a classic computer science challenge: preventing double-booking when multiple users attempt to reserve the exact same limited seat or ticket tier at the exact same millisecond.",
    whatIBuilt:
      "A responsive event discovery portal with interactive venue seat maps, time-bounded reservation locks, automated email notifications with dynamic QR tickets, and an organizer dashboard for on-site scanning and real-time admission verification.",
    keyDecisions:
      "Utilizing atomic condition updates (`findOneAndUpdate` with status checks) to reserve seats with a 10-minute expiry TTL, guaranteeing that abandoned booking carts automatically release inventory back to the general pool.",
    architecture:
      "Organized into modular services: Event Catalog Service, Reservation Engine with optimistic locking, and a Ticket Dispatcher that encodes signed cryptographic payloads into scannable QR images.",
    dataAndSecurity:
      "Role-based access control protecting organizer creation tools from general attendees. QR tickets are tamper-resistant with digital signatures validated upon venue scanning.",
    whatILearned:
      "While an academic project does not face real-world business ambiguity, it provided an exceptional sandbox to master concurrency edge-cases, optimistic locking, and clean architectural separation of concerns.",
  },
};

export const allProjects: Project[] = [
  bharatEnterprise,
  accountly,
  personalFinanceTracker,
  evora,
];
