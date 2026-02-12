export interface Project {
  id: string;
  title: string;
  tagline: string;
  categories: string[];
  techStack: string[];
  shortDescription: string;
  fullDescription: string;
  links: {
    demo?: string;
    github?: string;
  };
  features: string[];
  metrics?: { label: string; value: string }[];
  images?: string[];
}

export const portfolioData: Project[] = [
  {
    id: "phynix",
    title: "Phynix",
    tagline: "AI-Powered Mental Health Chatbot Platform",
    categories: ["AI/ML"],
    techStack: ["Natural Language Processing (NLP)", "Python", "Supabase", "BERT", "PyTorch", "Hugging Face"],
    shortDescription: "End-to-end AI mental health platform featuring hybrid conversational AI (BERT + GenAI), multi-model architecture, and real-time emotion analytics.",
    fullDescription: `Phynix is an end-to-end AI mental health platform designed to provide users a secure and interactive environment to express emotions, track mental well-being, and receive personalized AI-powered guidance. The heart of the system is Ashva, an intelligent companion powered by BERT for emotion detection and advanced Generative AI models for empathetic, context-aware conversations.

This platform is multi-page, multi-layered, and production-ready, combining a sophisticated frontend, hybrid AI/NLP backend, and relational database analytics.`,
    links: {
      demo: "https://phynix.streamlit.app/",
      github: "https://github.com/Suvroneel/Phynix-Mental-Health-Chatbot",
    },
    features: [
      "Hybrid Conversational AI: Emotion classification via fine-tuned BERT coupled with GenAI.",
      "Multi-Model Architecture: Supports 5 different AI models (Llama 3, Mistral, Zephyr, Phi-2, Gemma) with real-time switching.",
      "Analytics & Dashboards: Track emotional trends, risk levels, and confidence metrics over time.",
      "Private Journaling: Secure mood journaling backed by PostgreSQL.",
    ],
    metrics: [
      { label: "Models Supported", value: "5+" },
      { label: "Emotion Classes", value: "7" },
      { label: "Response Time", value: "Sub-second" },
    ],
  },
  {
    id: "invoice-agent",
    title: "Invoice Reconciliation Agent",
    tagline: "Multi-agent AI System for Financial Automation",
    categories: ["Automation"],
    techStack: ["Python", "LangGraph", "Llama 3.2", "Tesseract OCR", "FuzzyWuzzy"],
    shortDescription: "Autonomous multi-agent system that processes invoices, extracts structured data, matches against purchase orders, and flags discrepancies with human-level reasoning.",
    fullDescription: `An intelligent multi-agent system that autonomously processes supplier invoices, extracts structured data, matches them against purchase orders, and flags discrepancies with human-level reasoning.

Architecture involves 4 specialized agents:
1. Document Intelligence Agent (OCR + Extraction)
2. Matching Agent (Fuzzy Logic PO Matching)
3. Discrepancy Detection Agent (Price/Qty Variance)
4. Resolution Recommendation Agent (Risk-based decision making)`,
    links: {
      demo: "https://invoice-reconciliation-agents.streamlit.app/",
      github: "https://github.com/Suvroneel/invoice-reconciliation-agents",
    },
    features: [
      "Multi-Agent Orchestration via LangGraph.",
      "OCR Processing for PDFs, scans, and rotated documents.",
      "3-Tier Fuzzy Matching Strategy (Exact -> Supplier -> Product).",
      "Full reasoning transparency and confidence scoring for every decision.",
    ],
    metrics: [
      { label: "Accuracy (Clean)", value: "95%+" },
      { label: "Throughput", value: "5 inv/min" },
      { label: "Cost Reduction", value: "High" },
    ],
  },
  {
    id: "fraud-detection",
    title: "Fraud Detection System",
    tagline: "Production-Grade Financial Security Platform",
    categories: ["Data Science", "Data Analysis"],
    techStack: ["Python", "Django", "Scikit-learn", "Random Forest", "PostgreSQL", "Docker"],
    shortDescription: "Full-stack fraud detection system combining statistical analysis with ML to identify fraudulent financial transactions in real-time with 97% precision.",
    fullDescription: `A full-stack fraud detection system that combines statistical analysis with machine learning to identify fraudulent financial transactions in real-time. Built with Django and powered by a Random Forest classifier, it achieves 97% precision in fraud detection while maintaining a user-friendly web interface.

The system features an end-to-end ML pipeline from data preprocessing to production deployment on Render.`,
    links: {
      github: "https://github.com/Suvroneel/fraud-detection-system",
    },
    features: [
      "Real-time Transaction Analysis via REST API.",
      "Random Forest Classifier with 100 estimators.",
      "Advanced Feature Engineering (Balance deltas, flags).",
      "Comprehensive Dashboard with fraud probability indicators.",
    ],
    metrics: [
      { label: "Precision", value: "97%" },
      { label: "ROC-AUC", value: "0.90" },
      { label: "Inference", value: "<100ms" },
    ],
  },
  {
    id: "sentinel-sight",
    title: "SentinelSight",
    tagline: "AI Video Analytics Platform",
    categories: ["AI/ML"],
    techStack: ["OpenCV", "Python", "YOLOv8", "FastAPI", "Docker", "SQLite"],
    shortDescription: "Real-time video analytics platform processing RTSP streams to detect persons and trigger rule-based alerts (intrusion, loitering) using local-first inference.",
    fullDescription: `SentinelSight is an AI-powered video analytics platform designed to process RTSP camera streams in real-time, detect persons using YOLOv8, and trigger rule-based alerts for security events such as intrusion detection and loitering.

Designed with a local-first philosophy to ensure data privacy and low latency, avoiding cloud dependencies for inference.`,
    links: {
        github: "https://github.com/Suvroneel" 
    },
    features: [
      "RTSP Stream Ingestion with auto-reconnect.",
      "Real-time Person Detection using YOLOv8n.",
      "Rule Engine: Zone intrusion and loitering heuristics.",
      "Event-Driven Architecture with lightweight internal pub/sub.",
    ],
    metrics: [
      { label: "Latency", value: "Low" },
      { label: "Deployment", value: "Docker" },
      { label: "Privacy", value: "Local-First" },
    ],
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking Records",
    tagline: "Comprehensive EDA & Visualization Project",
    categories: ["Data Analysis"],
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    shortDescription: "A comprehensive EDA and visualization project analyzing hotel booking patterns, cancellations, revenue trends, customer behavior, and room type preferences.",
    fullDescription: `📊 A comprehensive EDA and visualization project analyzing hotel booking patterns, cancellations, revenue trends, customer behavior, room type preference using Python, Matplotlib etc — no complex math required.

Key Findings:
📌 Cancellation Patterns: 37% cancellation rate overall. 90% of cancellations came from bookings made >60 days in advance.
📌 Revenue Trends: July-August peak (30% higher revenue vs. average). January-February dip (45% lower revenue).
📌 Booking Lead Times: 70% of guests book within 30 days of arrival. Only 5% plan >6 months ahead.
📌 Room Type Demand: Dominant: Type A (42% share, 32K bookings). Underused: Types F/G (<5K bookings combined).
📌 Geographic Hotspots: Top 3 countries: Portugal (42%), UK (18%), France (12%).

Business Value:
🔹 Identified optimal pricing windows
🔹 Quantified revenue loss from cancellations
🔹 Revealed customer booking preferences`,
    links: {
        github: "https://github.com/Suvroneel"
    },
    features: [
      "Cancellation Rates: Simple percentage breakdowns (37% canceled).",
      "Revenue Trends: Monthly patterns via line charts.",
      "Booking Windows: Lead time distributions.",
      "Geographical Data: Top booking countries analysis.",
      "Room Type Demand: Visual ranking & market share.",
    ],
    metrics: [
      { label: "Cancellation Rate", value: "37%" },
      { label: "Peak Revenue", value: "July-Aug" },
      { label: "Dominant Room", value: "Type A (42%)" },
    ],
    images: [
        "https://github.com/user-attachments/assets/5eda7f7e-4557-4ad6-8646-a9a043463448",
        "https://github.com/user-attachments/assets/c0b2efb4-92cb-4e19-b20b-7b9074348683",
        "https://github.com/user-attachments/assets/08373bca-c7b7-4272-a99f-97786794eab0",
        "https://github.com/user-attachments/assets/e7082a5b-1348-447c-be1e-39fff7f567a9"
    ]
  },
  {
    id: "edu-generator",
    title: "Educational Content Generator",
    tagline: "Multi-Agent EdTech System",
    categories: ["AI/ML"],
    techStack: ["Python", "Streamlit", "Mistral-7B", "Hugging Face API"],
    shortDescription: "Multi-agent system that automatically generates grade-appropriate educational content with built-in quality assurance and refinement loops.",
    fullDescription: `A production-ready multi-agent system that creates educational content tailored to specific grade levels.
    
Two specialized agents work together:
1. Generator Agent: Creates explanations and MCQs using Mistral-7B.
2. Reviewer Agent: Validates content for age-appropriateness, structure, and quality.`,
    links: {
        github: "https://github.com/Suvroneel"
    },
    features: [
      "Grade-level adaptation (Grades 1-12).",
      "Multi-layer quality validation with auto-refinement.",
      "Exports to JSON, Markdown, and PDF formats.",
      "Flesch-Kincaid reading level validation.",
    ],
    metrics: [
      { label: "Cost", value: "$0 (Free Tier)" },
      { label: "Agents", value: "2" },
      { label: "Formats", value: "5" },
    ],
  },
  {
    id: "credit-analyzer",
    title: "Credit Eligibility Analyzer",
    tagline: "Enterprise-Grade Workflow Automation Engine",
    categories: ["Automation"],
    techStack: ["AWS Lambda", "n8n", "Google Gemini", "PostgreSQL", "Docker"],
    shortDescription: "Financial automation platform combining serverless infrastructure with AI-enhanced eligibility matching, reducing API costs by 85%.",
    fullDescription: `A production-grade financial automation platform that combines serverless cloud infrastructure with AI-enhanced eligibility matching. Built on AWS services for scalability, n8n for visual workflow orchestration, and Google Gemini for intelligent decision validation.

Achieves intelligent matching while keeping API costs under $3 per 10K applicants via a multi-stage filtering process.`,
    links: {
        github: "https://github.com/Suvroneel"
    },
    features: [
      "Event-Driven Serverless Architecture (S3 triggers Lambda).",
      "Multi-Stage Filtering: SQL -> n8n Rules -> AI Validation.",
      "Hybrid Intelligence: Deterministic rules for speed, AI for edge cases.",
      "Visual Workflow Orchestration via self-hosted n8n.",
    ],
    metrics: [
      { label: "Cost Savings", value: "85%" },
      { label: "Scale", value: "Serverless" },
      { label: "Processing", value: "Async" },
    ],
  },
];
