# Exam-Prep Verification — AWS Certified Solutions Architect – Associate (SAA-C03)

**Date:** 8 Nov 2026
**Scope:** All 10 original SAA-C03 practice questions (`QUESTIONS_SAA`, ids 201–210) in `app/app/questions.js`.
**Result: 10/10 verified correct, 0 fixed.** No question, answer, or explanation needed a change.

## Primary source (fetched and read directly, 8 Nov 2026)

**Official SAA-C03 exam guide, version 1.1 (PDF, 23 pages)**
`https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS-Certified-Solutions-Architect-Associate_Exam-Guide.pdf`
(fetched 8 Nov 2026 ~01:45 CET, HTTP 200, 180,496 bytes; full text extracted and read.)

Directly confirmed from that guide:
- Four domains and weights: Design Secure Architectures **30%**; Design Resilient Architectures **26%**; Design High-Performing Architectures **24%**; Design Cost-Optimized Architectures **20%**.
- Exam format: 65 questions total — **50 scored**, 15 unscored; multiple choice (one correct of four) and multiple response (two or more correct of five or more).
- Passing score: scaled score 100–1,000, minimum passing score **720**. Compensatory scoring model (no per-section pass needed).
- Target candidate: at least 1 year of hands-on experience designing cloud solutions that use AWS services.
- Every task statement each question below maps to is quoted from this guide.

**AWS certification page (fetched and read directly, 8 Nov 2026)**
`https://aws.amazon.com/certification/certified-solutions-architect-associate/`
- Exam duration **130 minutes**; format 65 questions, multiple choice or multiple response; cost **150 USD**.
- "This certification is valid for **3 years**."

## Exam facts used on the site

| Fact | Value on site | Source |
|---|---|---|
| Exam code / name | SAA-C03 / AWS Certified Solutions Architect – Associate | Official exam guide title |
| Domains + weights | Secure 30%; Resilient 26%; High-Performing 24%; Cost-Optimized 20% | Exam guide, "Content outline" |
| Question count | 65 questions (50 scored) | Exam guide, "Exam content" |
| Duration | 130 minutes | AWS certification page, exam overview |
| Passing score | 720 / 1,000 (scaled) | Exam guide, "Exam results" |
| Fee | $150 USD | AWS certification page, exam overview |
| Validity | 3 years | AWS certification page, FAQ |

No pass-rate claims anywhere. No AWS endorsement claimed anywhere.

## Per-question verification log

| # | Topic | Official source it maps to | Verdict |
|---|---|---|---|
| 201 | IAM role for EC2 app to read one S3 bucket — temporary credentials, no stored access keys, least privilege | Exam guide task 1.1 (apply security best practices to IAM users/root users; flexible authorization model with IAM users, groups, roles, policies; principle of least privilege). IAM docs, "Use an IAM role to grant permissions to applications running on Amazon EC2 instances" (read 8 Nov 2026): "you can and should use an IAM role to manage temporary credentials … you don't have to distribute long-term credentials (such as … access keys) to an Amazon EC2 instance" | Correct |
| 202 | Private-subnet servers reach S3 without a NAT gateway — gateway VPC endpoint, no additional charge | Exam guide task 1.2 (VPC architectures with security components; securing external network connections). VPC docs, "Gateway endpoints" (read 8 Nov 2026): "Gateway VPC endpoints provide reliable connectivity to Amazon S3 and DynamoDB without requiring an internet gateway or a NAT device for your VPC" and "There is no additional charge for using gateway endpoints" | Correct |
| 203 | Encrypt data at rest with customer-created, managed, rotatable keys — AWS KMS | Exam guide task 1.3, verbatim: "Encrypting data at rest (for example, AWS Key Management Service [AWS KMS])" and "Rotating encryption keys and renewing certificates". Distractors are real neighbouring services from the same task area: ACM = TLS certificates (in transit), Secrets Manager = credentials/secrets, IAM = identities/permissions | Correct |
| 204 | Decouple web tier from backend so spikes don't lose orders — Amazon SQS queue | Exam guide task 2.1 (queuing and messaging concepts; determining the AWS services required to achieve loose coupling). SQS docs, "What is Amazon Simple Queue Service?" (read 8 Nov 2026): "lets you integrate and decouple distributed software systems and components" and "Amazon SQS can process each buffered request independently, scaling transparently to handle any load increases or spikes" | Correct |
| 205 | RDS database survives an AZ failure with automatic failover — Multi-AZ deployment | Exam guide task 2.2 (highly available / fault-tolerant architectures across Availability Zones; failover strategies; disaster recovery). RDS docs, "Configuring and managing a Multi-AZ deployment for Amazon RDS" (read 8 Nov 2026): "A Multi-AZ DB instance deployment has one standby DB instance that provides failover support" | Correct |
| 206 | Web app scales with demand across AZs behind an ALB — EC2 Auto Scaling group | Exam guide tasks 2.1 and 3.2 (scaling strategies; scalability capabilities, e.g. Amazon EC2 Auto Scaling). Auto Scaling docs, "What is Amazon EC2 Auto Scaling?" (read 8 Nov 2026): "Amazon EC2 Auto Scaling can launch or terminate instances as demand on your application increases or decreases" and "balances your instances evenly across the Availability Zones … protecting your applications from failures in a single location" | Correct |
| 207 | Read-heavy RDS workload, same data read repeatedly — ElastiCache in-memory cache in front of the database | Exam guide task 3.3 (caching strategies and services, e.g. Amazon ElastiCache; "Integrating caching to meet business requirements"). ElastiCache docs, "What is Amazon ElastiCache?" (read 8 Nov 2026): "makes it easy to set up, manage, and scale a distributed in-memory data store or cache environment … provides a high-performance, scalable, and cost-effective caching solution" | Correct |
| 208 | Static S3 content to global users with lowest latency — CloudFront with S3 origin | Exam guide tasks 3.4 and 3.5 (edge networking services with appropriate use cases, e.g. Amazon CloudFront). CloudFront docs, "What is Amazon CloudFront?" (read 8 Nov 2026): "delivers your content through a worldwide network of data centers called edge locations. When a user requests content … the request is routed to the edge location that provides the lowest latency" | Correct |
| 209 | Compliance records, 7 years, almost never accessed, hours-long retrieval OK, lowest cost — S3 Glacier Deep Archive via lifecycle policy | Exam guide task 4.1 (storage tiering, "cold tiering for object storage"; "Managing S3 object lifecycles"; "Selecting the appropriate storage tier"). S3 docs, "Understanding and managing Amazon S3 storage classes" (read 8 Nov 2026): "S3 Glacier Deep Archive … Use for archiving data that rarely needs to be accessed. Data in this storage class is archived, and not available for real-time access" — the lowest-cost archival class; lifecycle configuration transitions objects between classes | Correct |
| 210 | DynamoDB, unpredictable traffic, no capacity planning — on-demand mode, pay per request | Exam guide task 4.3 (cost-effective database services; database capacity planning). DynamoDB docs, "DynamoDB throughput capacity" (read 8 Nov 2026): "On-demand mode … you don't need to specify how much read and write throughput you expect" and "pay-per-request pricing … so that you only pay for what you use"; "Provisioned mode … you must specify the number of reads and writes per second … charged based on the hourly … capacity you have provisioned, not how much … you actually consumed" | Correct |

## Notes / caveats

- **Q202 — Gateway vs interface endpoint:** gateway endpoints exist only for S3 and DynamoDB and carry no additional charge; interface endpoints (AWS PrivateLink) are charged hourly. The stem asks for S3 access at the lowest cost, so the gateway endpoint is the only correct choice. The explanation states this explicitly.
- **Q205 — Multi-AZ DB instance vs DB cluster:** the docs distinguish a Multi-AZ DB instance deployment (one standby, failover support, does not serve read traffic) from a Multi-AZ DB cluster deployment (two standbys, can serve read traffic). The stem asks only for automatic failover, so "Enable a Multi-AZ deployment" is correct without naming the cluster variant; the explanation does not claim the standby serves reads.
- **Q209 — Deep Archive vs Flexible Retrieval:** both are archival classes, but Deep Archive is the lowest-cost one and its retrieval takes hours, matching the stem exactly. Standard-IA requires millisecond access and is priced for infrequent (not rare) access; Intelligent-Tiering without archive tiers never reaches archival pricing.
- **Q210 — On-demand has no capacity reservation:** the distractor "On-demand mode with a fixed monthly capacity reservation" describes a feature that does not exist; on-demand is purely pay-per-request.
- **Guide currency:** the exam guide read is version 1.1 (SAA-C03). AWS has not announced a successor exam as of the 8 Nov 2026 check; the certification page still lists SAA-C03. Re-verify if AWS publishes a newer guide version.

## Build check

`npm run build` in `~/workspace/my-own-project/exam-prep/app/` — **passed clean** (exit 0, Next.js 14.2.35, "Compiled successfully", 5/5 static pages generated) on 8 Nov 2026 ~01:48 CET, before deploy `dpl_9PSveqU116YpWpj7jGEa6mL35afb`.
