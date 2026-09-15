import fs from "fs";
import path from "path";

// Generates a valid standard PDF 1.4 document without external dependencies
function generateResumePdf() {
  const contentStream = `
BT
/F1 18 Tf
50 755 Td
(SUBHANKAR DAS) Tj
0 -18 Td
/F1 10.5 Tf
(Full-Stack / MERN Developer | BCA \\(Hons.\\) Student) Tj
0 -14 Td
/F2 8.5 Tf
(Andal, West Bengal, India | subhankar.das.dev@gmail.com) Tj
0 -11 Td
(GitHub: https://github.com/subhankar-das-phantom | LinkedIn: https://www.linkedin.com/in/subhankar-das-610883317/) Tj

0 -24 Td
/F1 11 Tf
(ENGINEERING PROFILE) Tj
0 -13 Td
/F2 8.5 Tf
(Product-minded Full-Stack Developer with real-world experience building operational SaaS platforms, financial ledgers,) Tj
0 -11 Td
(and event systems. Focus on double-entry accounting, FIFO batch management, and atomic data integrity.) Tj

0 -22 Td
/F1 11 Tf
(PRODUCTION WORK & FEATURED SYSTEMS) Tj

0 -15 Td
/F1 10 Tf
(Bharat Enterprise - Billing & Business Operations SaaS \\(Dec 2025 - Present | Real-World Product\\)) Tj
0 -12 Td
/F2 8 Tf
(Role: Independent Full-Stack Developer | Live: https://billing-software-sigma.vercel.app/ | GitHub: subhankar-das-phantom/Billing-Software) Tj
0 -11 Td
(- Independently designed and shipped full-stack SaaS originating from active pharmaceutical distributor workflow.) Tj
0 -11 Td
(- Dual-entry chronological customer ledger, eliminating balance drift across multi-year transactions.) Tj
0 -11 Td
(- Automated FIFO lot-tracking ledger sorting batches by expiry date, preventing near-expiry fulfillment errors.) Tj
0 -11 Td
(- Engineered aggregation pipelines reducing ledger report transmission payload from 2.3 MB down to ~5 KB.) Tj
0 -11 Td
(- Compound indexing slashed cold-start reconciliation queries from 128.38 ms to 34.64 ms \\(~73% faster\\).) Tj

0 -16 Td
/F1 10 Tf
(Accountly - Financial Transparency for Shared Contributions \\(2024 | Independent Project\\)) Tj
0 -12 Td
/F2 8 Tf
(Role: Lead Full-Stack Developer | Live: https://accountly-phi.vercel.app/ | GitHub: subhankar-das-phantom/Accountly) Tj
0 -11 Td
(- Multi-member pooled contribution management with public-facing read-only audit portals.) Tj
0 -11 Td
(- Immutable append-only transaction ledger with cryptographic checksums and receipt verification.) Tj

0 -16 Td
/F1 10 Tf
(Personal Finance Tracker \\(Sep 2025 - Nov 2025 \\(Ongoing Updates\\) | Personal Project\\)) Tj
0 -12 Td
/F2 8 Tf
(Role: Full-Stack Developer | Live: https://personal-finance-tracker-black-pi.vercel.app/ | GitHub: subhankar-das-phantom/personal-finance-tracker) Tj
0 -11 Td
(- Built out of daily necessity: expense categorization, monthly budget constraints, and bidirectional Excel data sync.) Tj

0 -16 Td
/F1 10 Tf
(EVORA - Event Discovery & Reservation Platform \\(May 2026 - Aug 2026 | Academic Project\\)) Tj
0 -12 Td
/F2 8 Tf
(Role: Full-Stack Engineer & Team Lead | Live: https://evora-drab.vercel.app/ | GitHub: subhankar-das-phantom/Evora) Tj
0 -11 Td
(- Academic capstone implementing optimistic locking for atomic seat reservations and QR ticket verification.) Tj

0 -22 Td
/F1 11 Tf
(EDUCATION & ACADEMICS) Tj
0 -14 Td
/F1 9.5 Tf
(RICIS Institutions - Bachelor of Computer Applications \\(BCA Hons.\\) | 2024 - 2027 Planned Path) Tj
0 -12 Td
/F2 8 Tf
(Simple average of completed SGPAs: 8.79 \\(not university-issued CGPA\\) | Sem I: 8.50, Sem II: 9.10, Sem III: 8.77) Tj
0 -11 Td
(Coursework: Data Structures, DBMS, Operating Systems, Networks, C/C++, Core Java, Web Architecture) Tj

0 -22 Td
/F1 11 Tf
(TECHNICAL SKILLS) Tj
0 -13 Td
/F2 8 Tf
(Languages: TypeScript, JavaScript, Java, C++, SQL, HTML5, CSS3) Tj
0 -11 Td
(Frontend: React, Next.js, TypeScript, Tailwind CSS, Material UI, Vite) Tj
0 -11 Td
(Backend: Node.js, Express, REST APIs, JWT, Server-Sent Events \\(SSE\\)) Tj
0 -11 Td
(Databases: MongoDB, Mongoose, Aggregation Pipelines, Transactions, MySQL) Tj
0 -11 Td
(Infrastructure & Tools: Docker, Git, GitHub, Postman, Vercel, Render) Tj
0 -11 Td
(Architecture & Systems: Double-Entry Ledgers, FIFO Lot Tracking, Multi-Tenancy, RBAC, Idempotency) Tj
ET
`.trim();

  const streamLength = Buffer.byteLength(contentStream);

  const objects = [
    `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`,
    `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`,
    `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n`,
    `4 0 obj\n<< /Length ${streamLength} >>\nstream\n${contentStream}\nendstream\nendobj\n`,
    `5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`,
    `6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`,
  ];

  let offset = 0;
  const header = `%PDF-1.4\n`;
  offset += Buffer.byteLength(header);

  const xref = [`xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`];
  let body = "";

  for (const obj of objects) {
    const paddedOffset = String(offset).padStart(10, "0");
    xref.push(`${paddedOffset} 00000 n \n`);
    body += obj;
    offset += Buffer.byteLength(obj);
  }

  const startXref = offset;
  const trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${startXref}\n%%EOF\n`;

  const pdfData = header + body + xref.join("") + trailer;
  const outputPath = path.join(process.cwd(), "public", "resume", "Subhankar-Das-Resume.pdf");
  fs.writeFileSync(outputPath, pdfData, "binary");
  console.log("PDF generated successfully at:", outputPath);
}

generateResumePdf();
