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
