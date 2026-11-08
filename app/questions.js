// Original practice questions for the AWS Certified Cloud Practitioner (CLF-C02)
// exam, written in official exam style. NOT copied from AWS — official AWS
// questions are copyrighted. Every answer was verified against AWS documentation
// before shipping; see ../research.md for the verification log.
// Exam facts stated on this site (65 questions, 90 minutes, 700/1000 scaled
// pass, $100 USD, domains 24/30/34/12%) are from the official CLF-C02 exam
// guide and the AWS certification page, checked 7 Nov 2026.
// RE-CHECK 7 Nov 2026: all 10 questions re-verified one by one against
// official AWS sources (exam guide PDF v1.2 May 2025 read directly, plus
// docs.aws.amazon.com / aws.amazon.com pages). Verdict: 10/10 correct,
// 0 fixes needed. See ../verification.md for the per-question log.

export const EXAM_FACTS = {
  code: 'CLF-C02',
  name: 'AWS Certified Cloud Practitioner',
  questions: 65,
  scoredQuestions: 50,
  timeMinutes: 90,
  passingScore: '700 / 1,000 (scaled)',
  cost: '$100 USD',
  validity: '3 years',
  domains: [
    { name: 'Cloud Concepts', weight: 24 },
    { name: 'Security and Compliance', weight: 30 },
    { name: 'Cloud Technology and Services', weight: 34 },
    { name: 'Billing, Pricing, and Support', weight: 12 },
  ],
};

export const QUESTIONS = [
  {
    id: 1,
    domain: 'Cloud Concepts (24%)',
    question:
      'A company is reviewing its AWS architecture and wants a structured way to check whether it is avoiding unnecessary costs. Which pillar of the AWS Well-Architected Framework should it focus on?',
    options: ['Reliability', 'Cost Optimization', 'Performance Efficiency', 'Sustainability'],
    answer: 1,
    explanation:
      'The AWS Well-Architected Framework has six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability. The Cost Optimization pillar focuses on avoiding unnecessary costs.',
  },
  {
    id: 2,
    domain: 'Cloud Concepts (24%)',
    question:
      'A startup wants to stop buying servers up front and instead pay only for the computing capacity it actually uses. Which benefit of cloud computing does this describe?',
    options: [
      'Trade capital expense for variable expense',
      'Benefit from massive economies of scale',
      'Increase speed and agility',
      'Go global in minutes',
    ],
    answer: 0,
    explanation:
      'Trading capital expense for variable expense is one of the core benefits of the AWS Cloud: instead of investing heavily in data centers and servers up front, you pay only for what you consume.',
  },
  {
    id: 3,
    domain: 'Security and Compliance (30%)',
    question:
      'Under the AWS Shared Responsibility Model, which of the following is the customer\u2019s responsibility?',
    options: [
      'Physical security of AWS data centers',
      'Patching the guest operating system on an Amazon EC2 instance',
      'Maintaining the virtualization layer',
      'Replacing faulty hardware in a data center',
    ],
    answer: 1,
    explanation:
      'AWS is responsible for security OF the cloud (physical infrastructure, host operating system, virtualization layer). The customer is responsible for security IN the cloud — including patching the guest operating system on its EC2 instances and managing its own data and access.',
  },
  {
    id: 4,
    domain: 'Security and Compliance (30%)',
    question:
      'A company has just created its first AWS account. What is the recommended first security step for the root user?',
    options: [
      'Create access keys for the root user and store them in application code',
      'Enable multi-factor authentication (MFA) on the root user and use an IAM identity for daily work',
      'Share the root user password with the whole team so anyone can administer the account',
      'Use the root user for all daily administration tasks',
    ],
    answer: 1,
    explanation:
      'AWS best practice is to enable MFA on the root user, never create root access keys, and not use the root user for everyday tasks. Daily work should be done with an IAM identity (user or role) that has only the permissions it needs.',
  },
  {
    id: 5,
    domain: 'Cloud Technology and Services (34%)',
    question:
      'A company stores backups in Amazon S3 and wants the highest durability for its objects. Amazon S3 is designed to provide what level of durability for stored objects?',
    options: ['99.9% (three 9s)', '99.99% (four 9s)', '99.999999999% (eleven 9s)', '100%'],
    answer: 2,
    explanation:
      'Amazon S3 is designed for 99.999999999% (11 nines) durability of objects, by storing data redundantly across multiple devices in multiple Availability Zones.',
  },
  {
    id: 6,
    domain: 'Cloud Technology and Services (34%)',
    question:
      'A company wants code to run automatically each time a file is uploaded to an Amazon S3 bucket, without provisioning or managing any servers. Which service should it use?',
    options: ['Amazon EC2', 'AWS Lambda', 'Amazon RDS', 'Amazon VPC'],
    answer: 1,
    explanation:
      'AWS Lambda lets you run code without provisioning or managing servers, and it integrates directly with S3 event notifications — an upload to a bucket can invoke your code automatically.',
  },
  {
    id: 7,
    domain: 'Cloud Technology and Services (34%)',
    question:
      'A company runs its web application in two Availability Zones within the same AWS Region. What is the main benefit of this design?',
    options: [
      'Lower data transfer costs between Regions',
      'Higher availability \u2014 if one Availability Zone fails, the other keeps serving traffic',
      'Automatic compliance certification',
      'Reduced storage costs',
    ],
    answer: 1,
    explanation:
      'Availability Zones are isolated locations within a Region. Deploying across more than one means a failure in one Availability Zone does not take the application down — the core of designing for high availability on AWS.',
  },
  {
    id: 8,
    domain: 'Cloud Technology and Services (34%)',
    question:
      'A company wants to deploy the same set of AWS resources \u2014 a VPC, EC2 instances, and an S3 bucket \u2014 repeatedly and identically in multiple environments. Which service is designed for this?',
    options: ['AWS CloudFormation', 'Amazon CloudFront', 'AWS CloudTrail', 'Amazon CloudWatch'],
    answer: 0,
    explanation:
      'AWS CloudFormation provisions infrastructure as code from a template, so the same stack of resources can be deployed repeatedly and identically. CloudFront is a content delivery network, CloudTrail records API activity, and CloudWatch monitors resources.',
  },
  {
    id: 9,
    domain: 'Billing, Pricing, and Support (12%)',
    question:
      'A company runs a steady database workload 24 hours a day, 7 days a week, and expects it to run unchanged for the next three years. It must never be interrupted, and the company wants the lowest possible cost. Which Amazon EC2 pricing option fits best?',
    options: ['Spot Instances', 'On-Demand Instances', 'Reserved Instances', 'Dedicated Hosts'],
    answer: 2,
    explanation:
      'Reserved Instances give a significant discount in exchange for a 1- or 3-year commitment, which fits a steady, long-running workload. Spot Instances are cheaper but can be interrupted, and On-Demand has no commitment but costs more per hour.',
  },
  {
    id: 10,
    domain: 'Billing, Pricing, and Support (12%)',
    question:
      'A company wants to be notified by email when its monthly AWS spending is forecast to exceed $500. Which tool should it use?',
    options: ['AWS Budgets', 'AWS Cost Explorer', 'AWS Trusted Advisor', 'AWS Pricing Calculator'],
    answer: 0,
    explanation:
      'AWS Budgets lets you set a cost budget and sends alerts by email (or SNS) when actual or forecasted spending crosses a threshold. Cost Explorer analyzes past spending, Trusted Advisor gives best-practice recommendations, and the Pricing Calculator estimates costs before you build.',
  },
];

// Set B — second 10-question mock set (added 7 Nov 2026). NEW original
// questions on different CLF-C02 topics from Set A, written from the
// official exam guide domains. NOT copied from AWS. Answers follow the
// same official-source method as Set A (exam guide v1.2 May 2025 +
// docs.aws.amazon.com); each answer's basis is noted in its explanation.
export const QUESTIONS_SET_B = [
  {
    id: 11,
    domain: 'Cloud Concepts (24%)',
    question:
      'An online store automatically adds more Amazon EC2 instances during a flash sale and removes them when traffic drops back to normal. Which cloud computing concept does this describe?',
    options: ['Elasticity', 'High availability', 'Fault tolerance', 'Agility'],
    answer: 0,
    explanation:
      'Elasticity is the ability to acquire resources as you need them and release them when you no longer need them. High availability and fault tolerance are about surviving failures, not about scaling capacity up and down with demand.',
  },
  {
    id: 12,
    domain: 'Cloud Concepts (24%)',
    question:
      'A company must keep some workloads in its own data center for regulatory reasons, but wants to run other workloads on AWS and connect the two environments. Which cloud deployment model is this?',
    options: ['Public cloud', 'Private cloud', 'Hybrid cloud', 'Multi-cloud only'],
    answer: 2,
    explanation:
      'A hybrid cloud combines on-premises infrastructure with cloud resources, connected so they work together. Public cloud is AWS-only, private cloud is a single organization\u2019s own infrastructure, and multi-cloud means using more than one cloud provider.',
  },
  {
    id: 13,
    domain: 'Security and Compliance (30%)',
    question:
      'A developer needs read-only access to one Amazon S3 bucket and nothing else. Following AWS security best practices, what should the administrator do?',
    options: [
      'Give the developer the root user credentials',
      'Attach the AdministratorAccess managed policy to the developer\u2019s IAM user',
      'Create an IAM policy that allows only s3:GetObject on that bucket and attach it to the developer\u2019s IAM user',
      'Share another employee\u2019s access keys with the developer',
    ],
    answer: 2,
    explanation:
      'The principle of least privilege says to grant only the permissions needed to do the job — here, read-only access to one bucket. Root credentials and AdministratorAccess give far more access than needed, and access keys must never be shared between people.',
  },
  {
    id: 14,
    domain: 'Security and Compliance (30%)',
    question:
      'A company\u2019s auditor asks for on-demand access to AWS compliance reports and certifications such as ISO 27001 and SOC. Which AWS service provides these?',
    options: ['AWS Artifact', 'AWS Config', 'AWS Trusted Advisor', 'AWS CloudTrail'],
    answer: 0,
    explanation:
      'AWS Artifact is the self-service portal for on-demand access to AWS compliance reports and certifications. AWS Config records resource configuration changes, Trusted Advisor gives best-practice recommendations, and CloudTrail logs API activity.',
  },
  {
    id: 15,
    domain: 'Security and Compliance (30%)',
    question:
      'A company wants to control the encryption keys used to protect its data stored in Amazon S3 and other AWS services, including creating and rotating keys. Which service should it use?',
    options: ['AWS Key Management Service (AWS KMS)', 'AWS Identity and Access Management (IAM)', 'AWS CloudTrail', 'AWS WAF'],
    answer: 0,
    explanation:
      'AWS KMS creates and manages encryption keys and controls their use across AWS services. IAM manages identities and permissions, CloudTrail logs API calls, and AWS WAF is a web application firewall.',
  },
  {
    id: 16,
    domain: 'Cloud Technology and Services (34%)',
    question:
      'A company needs a fully managed relational database that supports MySQL and PostgreSQL, with automated backups and patching handled by AWS. Which service should it use?',
    options: ['Amazon RDS', 'Amazon DynamoDB', 'Amazon S3', 'Amazon ElastiCache'],
    answer: 0,
    explanation:
      'Amazon RDS is a managed relational database service supporting engines such as MySQL and PostgreSQL, with automated backups and patching. DynamoDB is a NoSQL database, S3 is object storage, and ElastiCache is an in-memory cache.',
  },
  {
    id: 17,
    domain: 'Cloud Technology and Services (34%)',
    question:
      'A web application runs on several Amazon EC2 instances. Which service distributes incoming traffic across those instances so no single instance is overloaded?',
    options: ['Elastic Load Balancing', 'Amazon Route 53', 'Amazon CloudFront', 'AWS Auto Scaling'],
    answer: 0,
    explanation:
      'Elastic Load Balancing distributes incoming traffic across multiple targets such as EC2 instances. Route 53 is a DNS service, CloudFront is a content delivery network, and Auto Scaling adjusts the number of instances — it does not distribute traffic itself.',
  },
  {
    id: 18,
    domain: 'Cloud Technology and Services (34%)',
    question:
      'A company wants to register a domain name for its website and route visitors to its AWS-hosted application using DNS. Which service provides both domain registration and DNS routing?',
    options: ['Amazon Route 53', 'Amazon CloudFront', 'Amazon VPC', 'AWS Direct Connect'],
    answer: 0,
    explanation:
      'Amazon Route 53 is a scalable DNS web service that also offers domain name registration. CloudFront distributes content, a VPC is an isolated virtual network, and Direct Connect is a dedicated private network link to AWS.',
  },
  {
    id: 19,
    domain: 'Cloud Technology and Services (34%)',
    question:
      'A company wants to move its on-premises database to Amazon RDS with minimal downtime, keeping the source database running during the migration. Which service is designed for this?',
    options: ['AWS Database Migration Service (AWS DMS)', 'AWS Snowball', 'AWS DataSync', 'AWS CloudFormation'],
    answer: 0,
    explanation:
      'AWS Database Migration Service migrates databases to AWS with minimal downtime, replicating ongoing changes while the source stays online. Snowball moves large amounts of data on physical devices, DataSync moves files, and CloudFormation provisions infrastructure as code.',
  },
  {
    id: 20,
    domain: 'Billing, Pricing, and Support (12%)',
    question:
      'Before building anything, a company wants a free estimate of what its planned AWS architecture would cost each month. Which tool should it use?',
    options: ['AWS Pricing Calculator', 'AWS Cost Explorer', 'AWS Budgets', 'AWS Trusted Advisor'],
    answer: 0,
    explanation:
      'The AWS Pricing Calculator estimates the cost of planned AWS services before you build. Cost Explorer analyzes past spending, Budgets alerts on spending thresholds, and Trusted Advisor gives optimization recommendations.',
  },
];

// ---------------------------------------------------------------------------
// AZ-900 — Microsoft Azure Fundamentals (added 7 Nov 2026)
// 10 original practice questions, written in official exam style, NOT copied
// from Microsoft. Every answer is grounded in the official AZ-900 study
// guide (Microsoft Learn, skills measured as of July 20, 2026):
// https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900
// Per-question verification: ../verification-az900.md
// Exam facts: pass score 700 or greater (study guide); 45 minutes and
// $99 USD fee per the Microsoft Learn AZ-900 certification page.
// No pass-rate claims, no Microsoft endorsement anywhere on this site.

export const AZ900_FACTS = {
  code: 'AZ-900',
  name: 'Microsoft Azure Fundamentals',
  timeMinutes: 45,
  passingScore: '700 / 1,000 (scaled)',
  cost: '$99 USD',
  domains: [
    { name: 'Describe cloud concepts', weight: '25–30%' },
    { name: 'Describe Azure architecture and services', weight: '35–40%' },
    { name: 'Describe Azure management and governance', weight: '30–35%' },
  ],
};

export const QUESTIONS_AZ900 = [
  {
    id: 101,
    domain: 'Describe cloud concepts (25–30%)',
    question:
      'A company stores customer data in Azure. Under the shared responsibility model, which of the following is always the customer\u2019s responsibility?',
    options: [
      'Physical security of the Azure datacenters',
      'Patching the physical host servers',
      'Protecting the company\u2019s own data and controlling who can access it',
      'Maintaining the Azure hypervisor',
    ],
    answer: 2,
    explanation:
      'In the shared responsibility model, Microsoft is responsible for the physical datacenter, host servers, and virtualization layer, while the customer is always responsible for its own data and for access control (identities and permissions). The study guide lists "Describe the shared responsibility model" under Describe cloud concepts.',
  },
  {
    id: 102,
    domain: 'Describe cloud concepts (25–30%)',
    question:
      'A small business wants to use email and office apps over the internet without installing, patching, or managing any of the underlying software. Which cloud service type is this?',
    options: [
      'Infrastructure as a service (IaaS)',
      'Platform as a service (PaaS)',
      'Software as a service (SaaS)',
      'Serverless computing',
    ],
    answer: 2,
    explanation:
      'Software as a service (SaaS) delivers finished applications over the internet — the provider manages the software, patching, and infrastructure, and the customer just uses the app (for example, Microsoft 365). The study guide lists describing IaaS, PaaS, and SaaS and identifying appropriate use cases for each.',
  },
  {
    id: 103,
    domain: 'Describe cloud concepts (25–30%)',
    question:
      'An online retailer expects traffic to spike sharply on a holiday weekend and fall back to normal afterwards. Which benefit of cloud services best describes automatically adding capacity for the spike and removing it afterwards?',
    options: ['Predictability', 'Scalability', 'Governance', 'Manageability'],
    answer: 1,
    explanation:
      'Scalability is the ability to increase and decrease resources to match demand — scaling out for a traffic spike and back in afterwards. The study guide lists describing the benefits of high availability and scalability in the cloud under Describe cloud concepts.',
  },
  {
    id: 104,
    domain: 'Describe Azure architecture and services (35–40%)',
    question:
      'A company runs a critical application in an Azure region and wants it to keep running if one datacenter in that region fails. Which Azure feature is designed for this?',
    options: [
      'Region pairs',
      'Availability zones',
      'Management groups',
      'Resource locks',
    ],
    answer: 1,
    explanation:
      'Availability zones are physically separate datacenters within an Azure region, each with independent power, cooling, and networking. Deploying across more than one zone keeps an application running if a single datacenter fails. The study guide lists "Describe availability zones" under the core architectural components of Azure.',
  },
  {
    id: 105,
    domain: 'Describe Azure architecture and services (35–40%)',
    question:
      'In the Azure resource hierarchy, which order is correct from the broadest scope to the most specific?',
    options: [
      'Resource group → Subscription → Management group → Resource',
      'Management group → Subscription → Resource group → Resource',
      'Subscription → Management group → Resource → Resource group',
      'Resource → Resource group → Subscription → Management group',
    ],
    answer: 1,
    explanation:
      'The hierarchy is management groups at the top, then subscriptions, then resource groups, then individual resources. Management groups apply governance across subscriptions, subscriptions are billing and access boundaries, and resource groups hold related resources. The study guide lists describing resources, resource groups, subscriptions, management groups, and their hierarchy.',
  },
  {
    id: 106,
    domain: 'Describe Azure architecture and services (35–40%)',
    question:
      'A company stores video files in Azure Blob Storage that are rarely watched but must be kept for several years at the lowest possible storage cost. Retrieval can take several hours. Which access tier is the best fit?',
    options: ['Hot tier', 'Cool tier', 'Archive tier', 'Premium tier'],
    answer: 2,
    explanation:
      'Blob Storage access tiers trade storage cost against retrieval speed: Hot is for frequently accessed data, Cool for infrequently accessed data stored at least 30 days, and Archive is the lowest-cost tier for rarely accessed data kept for years, with retrieval taking hours. The study guide lists "Describe storage tiers" under Azure storage services.',
  },
  {
    id: 107,
    domain: 'Describe Azure architecture and services (35–40%)',
    question:
      'An administrator wants to give a developer permission to read virtual machines in one resource group, and nothing else. Which Azure feature controls this?',
    options: [
      'Microsoft Entra Conditional Access',
      'Azure role-based access control (RBAC)',
      'Microsoft Defender for Cloud',
      'Azure Policy',
    ],
    answer: 1,
    explanation:
      'Azure role-based access control (RBAC) grants permissions by assigning a role (such as Reader) to a person at a specific scope, such as one resource group. Conditional Access controls sign-in conditions, Defender for Cloud assesses security posture, and Azure Policy enforces rules about what resources can be created. The study guide lists "Describe Azure role-based access control (RBAC)".',
  },
  {
    id: 108,
    domain: 'Describe Azure architecture and services (35–40%)',
    question:
      'A company needs a private, dedicated network connection from its on-premises datacenter to Azure that does not travel over the public internet. Which service provides this?',
    options: ['Azure VPN Gateway', 'Azure DNS', 'Azure ExpressRoute', 'Virtual network peering'],
    answer: 2,
    explanation:
      'Azure ExpressRoute is a private, dedicated connection between on-premises infrastructure and Azure that does not go over the public internet. VPN Gateway encrypts traffic over the public internet, DNS resolves names, and virtual network peering connects virtual networks inside Azure. The study guide lists ExpressRoute and VPN Gateway under virtual networking.',
  },
  {
    id: 109,
    domain: 'Describe Azure management and governance (30–35%)',
    question:
      'A company wants to make sure no one in the organization can create virtual machines in a region where the company does not operate. Which Azure feature enforces this kind of rule automatically?',
    options: ['Azure Policy', 'Resource locks', 'Azure Cost Management', 'Microsoft Purview'],
    answer: 0,
    explanation:
      'Azure Policy enforces rules over resources — for example, allowing virtual machines only in approved regions — and can deny or audit non-compliant deployments automatically. Resource locks prevent deletion or modification, Cost Management tracks spending, and Microsoft Purview governs data. The study guide lists "Describe the purpose of Azure Policy".',
  },
  {
    id: 110,
    domain: 'Describe Azure management and governance (30–35%)',
    question:
      'Before deploying a solution, a team wants a free estimate of what its planned Azure resources would cost each month. Which tool should it use?',
    options: [
      'Azure Advisor',
      'Azure Monitor',
      'The Azure pricing calculator',
      'Azure Service Health',
    ],
    answer: 2,
    explanation:
      'The Azure pricing calculator estimates the monthly cost of planned Azure resources before deployment. Azure Advisor gives best-practice recommendations, Azure Monitor collects metrics and logs, and Azure Service Health reports Azure service issues. The study guide lists "Explore the pricing calculator" under cost management in Azure.',
  },
];

// ---------------------------------------------------------------------------
// SAA-C03 — AWS Certified Solutions Architect – Associate (added 8 Nov 2026)
// 10 original practice questions, written in official exam style, NOT copied
// from AWS. Every answer is grounded in the official SAA-C03 exam guide
// (version 1.1, read directly as PDF from d1.awsstatic.com) and the AWS
// documentation pages listed in ../verification-saa.md.
// Per-question verification: ../verification-saa.md — 10/10 correct.
// Exam facts: 65 questions (50 scored), 130 minutes, pass 720/1,000 scaled,
// $150 USD, valid 3 years — exam guide + AWS certification page.
// No pass-rate claims, no AWS endorsement anywhere on this site.

export const SAA_FACTS = {
  code: 'SAA-C03',
  name: 'AWS Certified Solutions Architect – Associate',
  questions: 65,
  scoredQuestions: 50,
  timeMinutes: 130,
  passingScore: '720 / 1,000 (scaled)',
  cost: '$150 USD',
  validity: '3 years',
  domains: [
    { name: 'Design Secure Architectures', weight: 30 },
    { name: 'Design Resilient Architectures', weight: 26 },
    { name: 'Design High-Performing Architectures', weight: 24 },
    { name: 'Design Cost-Optimized Architectures', weight: 20 },
  ],
};

export const QUESTIONS_SAA = [
  {
    id: 201,
    domain: 'Design Secure Architectures (30%)',
    question:
      'An application running on an Amazon EC2 instance needs to read files from a specific Amazon S3 bucket. Following AWS security best practices, how should the application get the permissions it needs?',
    options: [
      'Store an IAM user\u2019s access keys in a file on the EC2 instance',
      'Attach an IAM role to the EC2 instance that grants read-only access to that S3 bucket',
      'Share the AWS account root user credentials with the application',
      'Make the S3 bucket public so the application needs no credentials',
    ],
    answer: 1,
    explanation:
      'An IAM role attached to the EC2 instance (via an instance profile) supplies temporary credentials automatically, so no long-term access keys have to be stored on the instance. The role\u2019s policy can grant read-only access to just that one bucket, following the principle of least privilege. The exam guide (task 1.1) lists applying security best practices to IAM users and root users and designing a flexible authorization model with IAM users, groups, roles, and policies.',
  },
  {
    id: 202,
    domain: 'Design Secure Architectures (30%)',
    question:
      'A company runs application servers in private subnets of a VPC. The servers must read objects from Amazon S3, but the company wants to avoid paying for a NAT gateway for this traffic. Which solution meets these requirements at the lowest cost?',
    options: [
      'Route the S3 traffic through a NAT gateway in a public subnet',
      'Add an internet gateway and move the servers to public subnets',
      'Create a gateway VPC endpoint for Amazon S3 and add its route to the private subnet route tables',
      'Create an interface VPC endpoint for Amazon S3 in each Availability Zone',
    ],
    answer: 2,
    explanation:
      'A gateway VPC endpoint provides connectivity to Amazon S3 (and DynamoDB) from private subnets without an internet gateway or a NAT device, and there is no additional charge for using gateway endpoints. A NAT gateway would add hourly and data-processing charges, an internet gateway would require public subnets, and an interface endpoint is the wrong endpoint type for S3 — and it is charged hourly. The exam guide (task 1.2) covers VPC architectures with security components and securing external network connections.',
  },
  {
    id: 203,
    domain: 'Design Secure Architectures (30%)',
    question:
      'A company stores sensitive customer records in Amazon S3 and must encrypt the data at rest with keys that the company itself creates, manages, and can rotate. Which service should it use?',
    options: [
      'AWS Key Management Service (AWS KMS)',
      'AWS Certificate Manager (ACM)',
      'AWS Secrets Manager',
      'AWS Identity and Access Management (IAM)',
    ],
    answer: 0,
    explanation:
      'AWS KMS creates and manages encryption keys and controls their use, including key rotation — it is the service for encrypting data at rest with customer-managed keys. The exam guide (task 1.3) lists "Encrypting data at rest (for example, AWS Key Management Service [AWS KMS])" and "Rotating encryption keys". ACM issues TLS certificates for data in transit, Secrets Manager stores credentials and secrets, and IAM manages identities and permissions.',
  },
  {
    id: 204,
    domain: 'Design Resilient Architectures (26%)',
    question:
      'A web application accepts orders and sends each order to a backend service for processing. During traffic spikes the backend cannot keep up, and orders are lost when the web servers are busy. Which design change makes the system resilient to these spikes?',
    options: [
      'Have the web servers call the backend service directly and synchronously, retrying until it answers',
      'Place an Amazon SQS queue between the web servers and the backend service so orders wait safely until the backend can process them',
      'Store the orders in an Amazon S3 bucket and have the backend poll the bucket every hour',
      'Run the backend service on a larger EC2 instance type',
    ],
    answer: 1,
    explanation:
      'Amazon SQS is a hosted queue that lets you integrate and decouple distributed systems: producers send messages to the queue and consumers process them at their own pace, so a spike in orders is buffered instead of lost. The exam guide (task 2.1) lists queuing and messaging concepts and determining the AWS services required to achieve loose coupling. Direct synchronous calls fail when the backend is busy, hourly polling adds delay, and a larger instance does not decouple the tiers.',
  },
  {
    id: 205,
    domain: 'Design Resilient Architectures (26%)',
    question:
      'A company runs a critical database on Amazon RDS. The database must stay available if the Availability Zone hosting it fails, with automatic failover to a standby. Which solution meets this requirement?',
    options: [
      'Enable a Multi-AZ deployment on the RDS DB instance',
      'Create a read replica in the same Availability Zone',
      'Enable automated backups with a 7-day retention period',
      'Migrate the database to Amazon DynamoDB',
    ],
    answer: 0,
    explanation:
      'A Multi-AZ DB instance deployment keeps a standby DB instance in a different Availability Zone that provides failover support — if the primary fails, RDS automatically fails over to the standby. A read replica in the same Availability Zone does not survive that zone failing and does not provide automatic failover, automated backups alone do not provide automatic failover, and migrating to DynamoDB is a different database engine, not a failover design. The exam guide (task 2.2) covers highly available and fault-tolerant architectures across Availability Zones and failover strategies.',
  },
  {
    id: 206,
    domain: 'Design Resilient Architectures (26%)',
    question:
      'A web application runs on Amazon EC2 instances behind an Application Load Balancer. Traffic varies widely during the day, and the company wants the number of instances to grow and shrink automatically with demand while staying spread across Availability Zones. Which solution meets these requirements?',
    options: [
      'Use one large EC2 instance and scale it vertically when traffic grows',
      'Create an Auto Scaling group spanning multiple Availability Zones, with scaling policies based on demand',
      'Launch a fixed number of EC2 instances manually each morning',
      'Use AWS Lambda to replace the EC2 instances entirely',
    ],
    answer: 1,
    explanation:
      'An Auto Scaling group launches or terminates EC2 instances as demand increases or decreases, and it balances instances evenly across the Availability Zones you specify, protecting the application from a failure in a single location. It also registers and deregisters instances with the load balancer automatically. Vertical scaling on one instance has a ceiling and a single point of failure, manual launches cannot react to demand, and replacing the whole application with Lambda is not the requirement. The exam guide (tasks 2.1 and 3.2) covers scaling strategies and Auto Scaling.',
  },
  {
    id: 207,
    domain: 'Design High-Performing Architectures (24%)',
    question:
      'A read-heavy application queries the same product catalog data from its Amazon RDS database thousands of times per minute. The data changes rarely, but database CPU is now the bottleneck. Which solution reduces the load on the database most effectively?',
    options: [
      'Add an Amazon ElastiCache in-memory cache in front of the database for the frequently read catalog data',
      'Increase the RDS instance size to the largest available',
      'Enable Multi-AZ on the RDS DB instance',
      'Move the catalog data to Amazon S3 Glacier Deep Archive',
    ],
    answer: 0,
    explanation:
      'Amazon ElastiCache is a managed in-memory data store / cache: frequently read, rarely changing data is served from memory instead of hitting the database, which removes the read load from RDS. The exam guide (task 3.3) lists caching strategies and services such as Amazon ElastiCache and integrating caching to meet business requirements. A larger instance only postpones the bottleneck, Multi-AZ is for availability not read performance, and Glacier Deep Archive is for long-term archival with hours-long retrieval.',
  },
  {
    id: 208,
    domain: 'Design High-Performing Architectures (24%)',
    question:
      'A company serves static website content — images, stylesheets, and JavaScript — from an Amazon S3 bucket to users around the world. Users far from the bucket\u2019s Region experience slow page loads. Which service delivers this content to global users with the lowest latency?',
    options: [
      'Amazon CloudFront, with the S3 bucket as the origin',
      'Amazon Route 53 with a single A record pointing to the S3 bucket',
      'AWS Global Accelerator with an Application Load Balancer endpoint',
      'Amazon API Gateway in front of the S3 bucket',
    ],
    answer: 0,
    explanation:
      'Amazon CloudFront is a content delivery network: it caches copies of your content in edge locations around the world, and each user request is routed to the edge location with the lowest latency. The exam guide (tasks 3.4 and 3.5) lists edge networking services with appropriate use cases, including Amazon CloudFront. Route 53 is DNS, not a cache; Global Accelerator accelerates traffic to application endpoints such as load balancers, not static S3 content; API Gateway fronts APIs, not static websites.',
  },
  {
    id: 209,
    domain: 'Design Cost-Optimized Architectures (20%)',
    question:
      'A company must keep compliance records in Amazon S3 for 7 years. The records are almost never accessed, retrieval can take several hours, and the company wants the lowest possible storage cost. Which storage solution fits best?',
    options: [
      'Keep the records in S3 Standard',
      'Use an S3 lifecycle policy to transition the records to S3 Glacier Deep Archive',
      'Use an S3 lifecycle policy to transition the records to S3 Standard-IA',
      'Store the records in S3 Intelligent-Tiering with no archive tiers enabled',
    ],
    answer: 1,
    explanation:
      'S3 Glacier Deep Archive is designed for low-cost, long-term data archiving of data that is rarely accessed — the lowest-cost S3 storage class — and retrieval takes hours, which the requirement allows. A lifecycle policy can transition objects there automatically. S3 Standard is the most expensive option for data that is almost never read, Standard-IA is for infrequently accessed data that still needs millisecond access, and Intelligent-Tiering without archive tiers never reaches archival pricing. The exam guide (task 4.1) covers storage tiering, cold tiering for object storage, and managing S3 object lifecycles.',
  },
  {
    id: 210,
    domain: 'Design Cost-Optimized Architectures (20%)',
    question:
      'A startup is building an application on Amazon DynamoDB. Traffic is unpredictable — it may spike suddenly and stay low for weeks — and the team does not want to plan or manage read and write capacity. Which DynamoDB capacity mode should it choose?',
    options: [
      'On-demand mode, which charges per request and scales automatically with no capacity planning',
      'Provisioned mode with a fixed amount of read and write capacity units',
      'Provisioned mode with auto scaling disabled',
      'On-demand mode with a fixed monthly capacity reservation',
    ],
    answer: 0,
    explanation:
      'DynamoDB on-demand mode is a serverless throughput option: you pay per request for only what you use, you do not specify how much read and write throughput you expect, and DynamoDB scales automatically to support workloads that start small and grow to millions of requests per second. Provisioned mode requires you to specify reads and writes per second and charges for the capacity you provision whether or not you use it. There is no fixed monthly capacity reservation in on-demand mode. The exam guide (task 4.3) covers cost-effective database services and capacity planning.',
  },
];
