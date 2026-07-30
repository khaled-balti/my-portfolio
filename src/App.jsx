import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, ChevronDown, Code, Server, Cloud, Database, Award, Briefcase, GraduationCap, Globe, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Proj1 from './assets/proj1.jpg'
import Proj2 from './assets/proj2.jpg'
import Proj3 from './assets/proj3.jpg'
import Proj4 from './assets/proj4.jpg'
import Proj5 from './assets/proj5.jpg'
import Proj6 from './assets/proj6.jpg'
import Proj7 from './assets/proj7.jpg'
import Proj8 from './assets/proj8.jpg'
import Proj9 from './assets/microsoft landing.png'
import Proj10 from './assets/chat1.png'
import Proj11 from './assets/elearning1.png'
import Chat2 from './assets/chat2.png'
import Chat3 from './assets/chat3.png'
import Chat4 from './assets/chat4.png'
import Chat5 from './assets/chat5.png'
import Chat6 from './assets/chat6.png'
import Chat7 from './assets/chat7.png'
import Chat8 from './assets/chat8.png'
import Chat9 from './assets/chat9.png'
import EasyEmploy1 from "./assets/auth system compressed.mp4"
import EasyEmploy2 from "./assets/cv section compressed.mp4"
import EasyEmploy3 from "./assets/job progress compressed.mp4"
import EasyEmploy4 from "./assets/adding announcement compressed.mp4"
import EasyEmploy5 from "./assets/structure overview compressed.mp4"
import EasyEmploy6 from "./assets/chat compressed.mp4"
import Learnify1 from "./assets/elearning1.png"
import Learnify2 from "./assets/elearning2.png"
import Learnify3 from "./assets/elearning3.png"
import Learnify4 from "./assets/elearning4.png"
import Learnify5 from "./assets/elearning5.png"
import Learnify6 from "./assets/elearning6.png"
import Learnify7 from "./assets/elearning7.png"
import Learnify8 from "./assets/elearning8.png"
import Learnify9 from "./assets/elearning9.png"
import Learnify10 from "./assets/elearning10.png"
import Learnify11 from "./assets/elearning11.png"
import CarPrice2 from "./assets/carprice2.png"
import CarPrice3 from "./assets/carprice3.png"
import CarPrice4 from "./assets/carprice4.png"
import CarPrice5 from "./assets/carprice5.png"
import CarPrice6 from "./assets/carprice6.png"
import CarPrice7 from "./assets/carprice7.png"
import CarPrice8 from "./assets/carprice8.png"
import CarPrice9 from "./assets/carprice9.png"
import CarPrice10 from "./assets/carprice10.png"
import CarPrice11 from "./assets/carprice11.png"
import Microsoft1 from "./assets/microsoft1.png"
import Microsoft2 from "./assets/microsoft2.png"
import Microsoft3 from "./assets/microsoft3.png"
import Microsoft4 from "./assets/microsoft4.png"
import Microsoft5 from "./assets/microsoft5.png"
import Microsoft6 from "./assets/microsoft6.png"
import Microsoft7 from "./assets/microsoft7.png"
import Microsoft8 from "./assets/microsoft8.png"
import Microsoft9 from "./assets/microsoft9.png"
import Microsoft10 from "./assets/microsoft10.png"
import MicrosoftDemo from './assets/microsoft demo.mp4'
import Monitoring2 from './assets/monitoring2.png'
import CloudDemo from './assets/cloud-demo.mp4'
import CloudD1 from './assets/cloud-architecture-diagramm1.png'
import CloudD2 from './assets/cloud-architecture-diagramm2.png'
import Cloud1 from './assets/add-user.png'
import Cloud2 from './assets/admin-reg.png'
import Cloud3 from './assets/chatbot-interface.png'
import Cloud4 from './assets/company-reg.png'
import Cloud5 from './assets/credential-migration.png'
import Cloud6 from './assets/credentials-list.png'
import Cloud7 from './assets/landing.png'
import Cloud8 from './assets/login.png'
import Cloud9 from './assets/migration-history.png'
import Cloud10 from './assets/pipeline-approval.png'
import Cloud11 from './assets/pipeline-conversion.png'
import Cloud12 from './assets/pipeline-list.png'
import Cloud13 from './assets/pipeline-post-migration.png'
import Cloud14 from './assets/pipeline-pre-migration.png'
import Cloud15 from './assets/repo-list.png'
import Cloud16 from './assets/repo-migration-interface.png'
import Cloud17 from './assets/repo-pre-migration.png'
import Cloud18 from './assets/repo-post-migration.png'
import Cloud19 from './assets/settings.png'
import Cloud20 from './assets/terminal-interface.png'
import Cloud21 from './assets/users-list.png'
const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentMediaIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setCurrentMediaIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextMedia = () => {
    if (selectedProject) {
      setCurrentMediaIndex((prev) =>
        prev === selectedProject.details.media.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevMedia = () => {
    if (selectedProject) {
      setCurrentMediaIndex((prev) =>
        prev === 0 ? selectedProject.details.media.length - 1 : prev - 1
      );
    }
  };

  const skills = {
    'DevOps & Cloud': ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Terraform', 'AWS', 'Ansible', 'Nginx', 'Prometheus', 'Grafana'],
    'Full-Stack': ['React.js', 'Express.js', 'NestJS', 'Django', 'Spring Boot', 'Redux', 'Material UI', 'TailwindCSS'],
    'Languages': ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'PHP'],
    'Databases': ['MySQL', 'PostgreSQL', 'MongoDB']
  };

  const projects = [
    {
      title: 'Migration of development environment into GCP and Github',
      description: 'Automated DevOps platform for GitLab-to-GitHub migration with cloud setup, CI/CD transformation, monitoring, and validation.',
      tags: ['Python', 'GitLab API', 'GitHub API', 'Automation', 'CI/CD', 'migration', 'VPN'],
      image: Cloud7,
      gradient: 'from-blue-500 to-cyan-600',
      details: {
        overview: 'End-to-end DevOps migration platform developed to automate the migration of software projects from GitLab to GitHub. The solution combines cloud infrastructure provisioning, secure VM management, backup automation, monitoring and alerting, repository analysis, migration execution, CI/CD pipeline transformation, and post-migration verification to ensure a secure and reliable migration process with minimal manual intervention.',
        features: [
          'Provision cloud infrastructure',
          'Establish secure connection to the VM with VPN',
          'Configure a backup system to automatically backup data from github, VM disk and Googlr Drive',
          'Configure a cloud monitoring system and alerting channel',
          'Automated discovery of GitLab repositories using API integration',
          'Repository analysis and risk assessment based on migration criteria',
          'Automated migration of repositories from GitLab to GitHub',
          'Preservation of branches, commits, tags, and repository history',
          'Post-migration verification of migrated repositories',
          'Generation of migration reports and assessment results',
          'Automation scripts for automatic pipeline migration from jenkins to github actions',
          'Integration with CI/CD workflows for migration validation',
          'Integrate a RAG chatbot to simplify data querying'
        ],

        technologies: [
          'Python',
          'GitLab API',
          'GitHub API',
          'Jenkins',
          'Docker',
          'CI/CD',
          'Shell Scripts',
          'Terraform',
          'React',
          'Django',
          'Flask',
          'Google Cloud Platform',
          'RAG',
          'Docker'
        ],

        media: [
          { type: 'image', url: CloudD1, caption: 'Cloud VMs diagram' },
          { type: 'image', url: CloudD2, caption: 'Backup system diagram' },
          { type: 'image', url: Cloud1, caption: 'Add user interface' },
          { type: 'image', url: Cloud2, caption: 'Admin registration' },
          { type: 'image', url: Cloud3, caption: 'Chatbot interface' },
          { type: 'image', url: Cloud4, caption: 'company registration form' },
          { type: 'image', url: Cloud5, caption: 'credentials  migration interface' },
          { type: 'image', url: Cloud6, caption: 'credentials list' },
          { type: 'image', url: Cloud7, caption: 'landing page' },
          { type: 'image', url: Cloud8, caption: 'login form' },
          { type: 'image', url: Cloud9, caption: 'migration history section' },
          { type: 'image', url: Cloud10, caption: 'approve pipeline migration' },
          { type: 'image', url: Cloud11, caption: 'convert pipeline' },
          { type: 'image', url: Cloud12, caption: 'pipelines list' },
          { type: 'image', url: Cloud13, caption: 'pipelines pre-migration infos' },
          { type: 'image', url: Cloud14, caption: 'pipelines post-migration infos' },
          { type: 'image', url: Cloud15, caption: 'repositories list' },
          { type: 'image', url: Cloud16, caption: 'repository migration interface' },
          { type: 'image', url: Cloud17, caption: 'repositories pre-migration infos' },
          { type: 'image', url: Cloud18, caption: 'repositories post-migration infos' },
          { type: 'image', url: Cloud19, caption: 'settings section' },
          { type: 'image', url: Cloud20, caption: 'terminal interface' },
          { type: 'image', url: Cloud21, caption: 'users list' },
          { type: 'video', url: CloudDemo, caption: 'Demo' },
        ]
      }
    },
    {
      title: 'Easy Employ - Employment Platform',
      description: 'Full-stack job recruitment platform with real-time notifications, analytics, and advanced search filters.',
      tags: ['React.js', 'Django', 'PostgreSQL', 'WebSockets', 'Docker'],
      image: Proj7,
      gradient: 'from-blue-500 to-purple-600',
      details: {
        overview: 'A comprehensive job recruitment platform connecting employers and job seekers with advanced features for seamless hiring process management.',
        features: [
          'Job posting and applicant tracking system',
          'Real-time notifications using WebSockets',
          'Advanced search and filtering capabilities',
          'Interactive analytics dashboard with Recharts',
          'Profile management for employers and seekers',
          'Responsive design with TailwindCSS and Material UI'
        ],
        technologies: ['React.js', 'Django', 'PostgreSQL', 'WebSockets (Channels)', 'Docker', 'Redux Toolkit', 'TailwindCSS', 'Material UI', 'Recharts'],
        media: [
          { type: 'video', url: EasyEmploy1, caption: 'Authentication System' },
          { type: 'video', url: EasyEmploy2, caption: 'CV Section' },
          { type: 'video', url: EasyEmploy3, caption: 'Job Progress' },
          { type: 'video', url: EasyEmploy4, caption: 'Adding Announcement' },
          { type: 'video', url: EasyEmploy5, caption: 'Structure Overview' },
          { type: 'video', url: EasyEmploy6, caption: 'Chat Feature' },
        ]
      }
    },
    {
        title: 'Learnify - Online Learning Platform',
        description: 'Full-stack e-learning platform with interactive video courses, real-time Q&A, comment and like systems, and progress tracking.',
        tags: ['React.js', 'Node.js', 'MongoDB', 'Chadcn-ui'],
        image: Proj11,
        gradient: 'from-indigo-500 to-pink-600',
        details: {
            overview: 'An advanced online learning platform that connects instructors and students through video-based courses, interactive lessons, and a social learning experience.',
            features: [
            'Course creation and management for instructors',
            'Video lectures with progress tracking',
            'Like and comment system for lessons and courses',
            'Personalized dashboard showing enrolled courses and learning progress',
            'Admin analytics for user engagement and course performance',
            'Responsive and accessible UI using TailwindCSS and Material UI'
            ],
            technologies: [
            'React.js',
            'Nodejs',
            'Express.js',
            'MongoDB',
            'Redux Toolkit',
            'TailwindCSS',
            'Material UI',
            'JWT Authentication'
            ],
            media: [
            { type: 'image', url: Learnify1, caption: 'User Authentication & Authorization' },
            { type: 'image', url: Learnify2, caption: 'Course Creation Flow' },
            { type: 'image', url: Learnify3, caption: 'Lesson Player with Comments' },
            { type: 'image', url: Learnify4, caption: 'Like System & Real-time Q&A' },
            { type: 'image', url: Learnify5, caption: 'User Dashboard & Progress Tracking' },
            { type: 'image', url: Learnify6, caption: 'Admin Analytics Overview' },
            { type: 'image', url: Learnify7, caption: 'Admin Analytics Overview' },
            { type: 'image', url: Learnify8, caption: 'Admin Analytics Overview' },
            { type: 'image', url: Learnify9, caption: 'Admin Analytics Overview' },
            { type: 'image', url: Learnify10, caption: 'Admin Analytics Overview' },
            { type: 'image', url: Learnify11, caption: 'Admin Analytics Overview' },
            ]
        }
    },
    {
        title: 'LicenSync - Microsoft License Management Platform',
        description: 'Enterprise-grade management system for Microsoft licenses, clients, providers, and orders, featuring advanced analytics and interactive map visualizations.',
        tags: ['React.js', 'NestJS', 'MySQL', 'Recharts', 'Docker'],
        image: Proj9,
        gradient: 'from-cyan-500 to-blue-700',
        details: {
            overview: 'A powerful B2B management platform that centralizes all operations related to Microsoft license distribution, including client and provider management, order tracking, and analytical dashboards with map-based insights.',
            features: [
            'Client and provider management with role-based access control',
            'Order creation, tracking, and license assignment',
            'Comprehensive sales analytics dashboard',
            'Interactive map showing license distribution by country',
            'Real-time stats and monthly revenue visualization using Recharts',
            'Authentication and authorization with JWT',
            'Responsive UI with advanced filtering and search options',
            'Dockerized microservices for scalability and maintainability'
            ],
            technologies: [
            'React.js',
            'NestJS',
            'MySQL',
            'TypeORM',
            'Recharts',
            'JVectorMap',
            'Redux Toolkit',
            'TailwindCSS',
            'JWT Authentication',
            'Docker',
            'Axios'
            ],
            media: [
            { type: 'image', url: Microsoft1, caption: 'Dashboard Overview' },
            { type: 'image', url: Microsoft2, caption: 'Client and Provider Management' },
            { type: 'image', url: Microsoft3, caption: 'Order Creation and License Assignment' },
            { type: 'image', url: Microsoft4, caption: 'Sales Analytics with Recharts' },
            { type: 'image', url: Microsoft5, caption: 'Map Analytics by Country' },
            { type: 'image', url: Microsoft6, caption: 'Authentication and Role Management' },
            { type: 'image', url: Microsoft7, caption: 'Authentication and Role Management' },
            { type: 'image', url: Microsoft8, caption: 'Authentication and Role Management' },
            { type: 'image', url: Microsoft9, caption: 'Authentication and Role Management' },
            { type: 'image', url: Microsoft10, caption: 'Authentication and Role Management' },
            { type: 'video', url: MicrosoftDemo, caption: 'Authentication and Role Management' },
            ]
        }
    },
    {
        title: 'ChatterBox - Real-time Messaging Platform',
        description: 'Full-stack real-time chat application with private and group chats, media sharing, and online presence tracking.',
        tags: ['React.js', 'NestJS', 'MongoDB', 'WebSockets'],
        image: Proj10,
        gradient: 'from-purple-500 to-pink-600',
        details: {
            overview: 'A dynamic real-time chat platform enabling seamless communication between users through private messages, group chats, and multimedia sharing. The app supports live typing indicators, online presence, and modern UI interactions.',
            features: [
            'Real-time private and group messaging',
            'Online/offline presence tracking',
            'Typing indicators and message status updates (delivered/read)',
            'File and media sharing (images, videos, documents)',
            'User authentication and profile management',
            'Message search and filtering',
            'Responsive chat layout with dark/light themes',
            'Notification system for new messages and mentions'
            ],
            technologies: [
            'React.js',
            'NestJS',
            'MongoDB',
            'WebSockets (Gateway)',
            'Socket.io',
            'JWT Authentication',
            'Redux Toolkit',
            'TailwindCSS',
            'Docker',
            'Cloudinary API (for media uploads)'
            ],
            media: [
            { type: 'image', url: Proj10, caption: 'User Authentication & Profile Setup' },
            { type: 'image', url: Chat2, caption: 'Private Chat in Real Time' },
            { type: 'image', url: Chat3, caption: 'Group Chat Functionality' },
            { type: 'image', url: Chat4, caption: 'Media Sharing & Uploads' },
            { type: 'image', url: Chat5, caption: 'Online Status & Typing Indicators' },
            { type: 'image', url: Chat6, caption: 'Notification System & Theming' },
            { type: 'image', url: Chat7, caption: 'Notification System & Theming' },
            { type: 'image', url: Chat8, caption: 'Notification System & Theming' },
            { type: 'image', url: Chat9, caption: 'Notification System & Theming' },
            ]
        }
    },
    {
      title: 'Car Price Detector',
      description: 'AI-powered web app predicting car prices using machine learning, with GraphQL API and responsive UI.',
      tags: ['React.js', 'NestJS', 'GraphQL', 'AI/ML'],
      image: Proj8,
      gradient: 'from-green-500 to-teal-600',
      details: {
        overview: 'Machine learning powered application that predicts car prices based on various vehicle characteristics, featuring a modern GraphQL API and intuitive user interface.',
        features: [
          'AI model for accurate car price prediction',
          'Interactive React frontend with Bootstrap',
          'GraphQL API for efficient data fetching',
          'JWT authentication for secure access',
          'Real-time price predictions',
          'Comprehensive vehicle data processing'
        ],
        technologies: ['React.js', 'NestJS', 'GraphQL', 'Python', 'Machine Learning', 'Bootstrap', 'JWT'],
        media: [
          { type: 'image', url: Proj8, caption: 'Car Price Prediction Interface' },
          { type: 'image', url: CarPrice2, caption: 'AWS Architecture Diagram' },
          { type: 'image', url: CarPrice3, caption: 'AWS Architecture Diagram' },
          { type: 'image', url: CarPrice4, caption: 'AWS Architecture Diagram' },
          { type: 'image', url: CarPrice5, caption: 'AWS Architecture Diagram' },
          { type: 'image', url: CarPrice6, caption: 'AWS Architecture Diagram' },
          { type: 'image', url: CarPrice7, caption: 'AWS Architecture Diagram' },
          { type: 'image', url: CarPrice8, caption: 'AWS Architecture Diagram' },
          { type: 'image', url: CarPrice9, caption: 'AWS Architecture Diagram' },
          { type: 'image', url: CarPrice10, caption: 'AWS Architecture Diagram' },
          { type: 'image', url: CarPrice11, caption: 'AWS Architecture Diagram' },
        ]
      }
    },
    {
      title: 'Full-Stack Web App on AWS',
      description: 'Deployed 2-tier architecture with React frontend, Node.js backend, and MySQL on AWS EC2 with Route 53.',
      tags: ['AWS', 'React.js', 'Node.js', 'MySQL', 'Nginx'],
      image: Proj2,
      gradient: 'from-cyan-500 to-blue-600',
      details: {
        overview: 'Production-ready full-stack application deployed on AWS with a robust 2-tier architecture, custom domain, and optimized infrastructure.',
        features: [
          'Separate EC2 instances for frontend and backend',
          'Nginx reverse proxy configuration',
          'MySQL database service',
          'Custom domain with AWS Route 53',
          'Security groups and load balancing',
          'Scalable and highly available architecture'
        ],
        technologies: ['AWS EC2', 'React.js', 'Node.js', 'MySQL', 'Nginx', 'Route 53', 'AWS VPC'],
        media: [
          { type: 'image', url: Proj2, caption: 'AWS Architecture Diagram' },
        ]
      }
    },
    {
      title: 'CI/CD Pipeline for Web Application',
      description: 'Jenkins pipeline with SonarQube analysis, Docker containerization, and automated Kubernetes deployment.',
      tags: ['Jenkins', 'SonarQube', 'Docker', 'Kubernetes'],
      image: Proj3,
      gradient: 'from-purple-500 to-pink-600',
      details: {
        overview: 'Automated deployment pipeline with comprehensive code quality analysis, containerization, and orchestration for production-ready deployments.',
        features: [
          'Automated code checkout from master branch',
          'SonarQube integration for code quality analysis',
          'Docker image building and registry management',
          'Kubernetes deployment automation',
          'Monitoring and logging integration',
          'Production-ready deployment workflow'
        ],
        technologies: ['Jenkins', 'SonarQube', 'Docker', 'Kubernetes', 'Container Registry', 'Git'],
        media: [
          { type: 'image', url: Proj3, caption: 'Jenkins Pipeline Stages' }
        ]
      }
    },
    {
      title: 'Cloud Infrastructure with Terraform',
      description: 'Automated AWS infrastructure provisioning with modular, reusable scripts for multiple environments.',
      tags: ['Terraform', 'AWS', 'EC2', 'VPC', 'RDS'],
      image: Proj1,
      gradient: 'from-yellow-500 to-orange-600',
      details: {
        overview: 'Infrastructure as Code solution using Terraform for automated, consistent, and scalable AWS infrastructure provisioning across multiple environments.',
        features: [
          'Modular Terraform scripts for reusability',
          'Multi-environment support (dev, staging, prod)',
          'Automated EC2, VPC, and RDS provisioning',
          'Security groups and IAM role management',
          'Cost-effective and scalable architecture',
          'Version-controlled infrastructure'
        ],
        technologies: ['Terraform', 'AWS', 'EC2', 'VPC', 'RDS', 'IAM', 'Security Groups'],
        media: [
          { type: 'image', url: Proj1, caption: 'Infrastructure Overview' }
        ]
      }
    },
    {
        title: 'Grafana & Prometheus Monitoring System',
        description: 'Dockerized monitoring solution using Prometheus and Grafana for real-time Node.js application performance tracking with automated email alerts.',
        tags: ['Grafana', 'Prometheus', 'Node.js', 'Docker'],
        image: Proj5,
        gradient: 'from-green-500 to-teal-600',
        details: {
            overview: 'A complete observability and alerting setup designed to monitor Node.js application performance metrics using Prometheus and Grafana, containerized with Docker and enhanced with automated alert notifications via email.',
            features: [
            'Prometheus setup for real-time metrics collection from Node.js app',
            'Grafana dashboards for performance visualization',
            'Alertmanager configuration for email notifications on threshold breaches',
            'Docker Compose integration for full environment orchestration',
            'Node.js application instrumented with Prometheus client library',
            'Custom queries and visualizations for CPU, memory, and response time metrics',
            ],
            technologies: [
            'Grafana',
            'Prometheus',
            'Node.js',
            'Docker',
            'Alertmanager',
            'Express.js',
            'Prometheus Node Client',
            'SMTP Email Integration',
            'YAML Configuration',
            'Node Exporter'
            ],
            media: [
                { type: 'image', url: Proj5, caption: 'Grafana Dashboard Overview' },
                { type: 'image', url: Monitoring2, caption: 'Prometheus Metrics Explorer' },
            ]
        }
    },
    {
        title: 'GitOps Deployment with GitHub, ArgoCD & Kubernetes',
        description: 'Automated GitOps pipeline integrating GitHub, ArgoCD, and Kubernetes for continuous delivery and cluster synchronization.',
        tags: ['GitHub', 'ArgoCD', 'Kubernetes', 'Docker', 'GitOps'],
        image: Proj6,
        gradient: 'from-blue-600 to-indigo-700',
        details: {
            overview: 'A fully automated GitOps workflow leveraging GitHub as the source of truth, ArgoCD for continuous delivery, and Kubernetes for scalable application deployment. Every code change triggers automated synchronization and deployment to the cluster.',
            features: [
            'Declarative GitOps workflow using ArgoCD and GitHub',
            'Automatic Kubernetes deployment upon GitHub push',
            'ArgoCD sync and health monitoring dashboard',
            'Docker-based containerization and image versioning',
            'Seamless integration with private GitHub repositories',
            ],
            technologies: [
            'GitHub',
            'ArgoCD',
            'Kubernetes',
            'Docker',
            'YAML Configuration',
            'GitOps Workflow',
            ],
            media: [
            { type: 'image', url: Proj6, caption: 'ArgoCD Application Sync Overview' },
            ]
        }
    },

  ];

  const experience = [
    {
      role: 'End-of-Studies Project (PFE) – Cloud & Devops Engineer',
      company: 'ITDC Abshore',
      period: 'Feb 2026 - Jul 2026',
      achievements: ['Deployed secure GCP infrastructure using Terraform (IaC), VPC networking, and IAM for cloud migration', 'Engineered an automated GUI migration platform with RBAC to transition GitLab/Jenkins to GitHub/Actions', 'Integrated an OpenAI chatbot for automated log analysis, repository auditing, and system troubleshooting.']
    },
    {
      role: 'Full-Stack Developer Freelance',
      company: 'Freelance',
      period: '2025 - Present',
      achievements: ['Impelement a restaurent management system']
    },
    {
      role: 'Full-Stack Developer Intern',
      company: 'Horizon Simulations UK',
      period: 'Jun 2025 - Jul 2025',
      achievements: ['Developed ERP system modules', 'Built frontend with React.js', 'PostgreSQL database management']
    },
    {
      role: 'Full-Stack Developer & DevOps Intern',
      company: 'Insomea Computer Solutions',
      period: 'Aug 2024 - Sep 2024',
      achievements: ['Built admin dashboard for license management', 'Containerized with Docker', 'Implemented analytics features']
    },
    {
      role: 'Full Stack Web Instructor',
      company: 'Microsoft Issatso',
      period: 'Oct 2024 - Mar 2025',
      achievements: ['Taught MERN stack', 'Designed interactive lessons', 'Guided students through projects']
    },
    {
      role: 'Freelance Developer',
      company: 'Self-Employed',
      period: 'Dec 2024 - Present',
      achievements: ['Developed web applications for clients', 'End-to-end solution design', 'Client communication']
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg z-50 border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            KB
          </div>
          <div className="flex gap-8">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`hover:text-cyan-400 transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-cyan-400' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-cyan-500/10 rounded-full animate-pulse"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Khaled Balti
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 mb-8">
            Full-Stack Developer & DevOps Engineer
          </p>
          <div className="flex gap-6 justify-center mb-12">
            <a href="https://github.com/khaled-balti" target="_blank" rel="noopener noreferrer"
               className="hover:text-cyan-400 transition-colors hover:scale-110 transform">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/khaled-balti-2719262b3" target="_blank" rel="noopener noreferrer"
               className="hover:text-cyan-400 transition-colors hover:scale-110 transform">
              <Linkedin size={28} />
            </a>
            <a href="mailto:khaledbalti00001@gmail.com"
               className="hover:text-cyan-400 transition-colors hover:scale-110 transform">
              <Mail size={28} />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-cyan-400"
          >
            <ChevronDown size={40} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Motivated software engineering student with hands-on experience in building full-stack web applications
              and implementing DevOps and cloud solutions. Skilled in developing responsive frontends, robust backends,
              containerizing applications with Docker, deploying them on Kubernetes, implementing CI/CD pipelines,
              and leveraging AWS cloud services.
            </p>
            <div className="flex flex-wrap gap-4 text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-cyan-400" />
                <span>Jendouba, Tunisia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={20} className="text-cyan-400" />
                <span>+216 22 736 565</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={20} className="text-cyan-400" />
                <span>Arabic, English, French</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div
                key={category}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-400 flex items-center gap-2">
                  {category === 'DevOps & Cloud' && <Cloud size={24} />}
                  {category === 'Full-Stack' && <Code size={24} />}
                  {category === 'Languages' && <Server size={24} />}
                  {category === 'Databases' && <Database size={24} />}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-sm border border-slate-600/50 hover:border-cyan-500/50 hover:bg-slate-700 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:opacity-70 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                </div>
                <div className="p-6 flex flex-col justify-between min-h-70">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                        <span
                            key={tag}
                            className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400"
                        >
                            {tag}
                        </span>
                        ))}
                    </div>
                    <button
                        onClick={() => openProjectModal(project)}
                        className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all transform hover:scale-105"
                    >
                        <ExternalLink size={18} />
                        View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all hover:transform hover:translate-x-2"
              >
                <div className="flex items-start gap-4">
                  <Briefcase className="text-cyan-400 mt-1 flex-shrink-0" size={24} />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-cyan-400">{exp.role}</h3>
                    <p className="text-slate-400 mb-2">{exp.company} | {exp.period}</p>
                    <ul className="space-y-1 text-slate-300">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-cyan-400">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Education & Certificates
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-cyan-400 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400">Software Engineering</h3>
                  <p className="text-slate-400">Higher Institute of Applied Sciences and Technology</p>
                  <p className="text-slate-500">Sep 2023 - Present</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <Award className="text-cyan-400 mt-1" size={24} />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Certifications</h3>
                  <div className="space-y-2 text-slate-300">
                    <p>• CCNAv7: Introduction to Networks</p>
                    <p>• CCNAv7: Switching, Routing, and Wireless Essentials</p>
                    <p>• 4.0 Industry Fundamentals</p>
                    <p>• Nvidia: Fundamentals of Deep Learning</p>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Interested in working together? Feel free to reach out!
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="mailto:khaledbalti00001@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-all transform hover:scale-105"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://github.com/khaled-balti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all transform hover:scale-105"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/khaled-balti-2719262b3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all transform hover:scale-105"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700/50 text-center text-slate-400">
        <p>© 2025 Khaled Balti. Built with React & Tailwind CSS</p>
      </footer>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex justify-between items-center z-10">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {selectedProject.title}
              </h2>
              <button
                onClick={closeProjectModal}
                className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            {/* Media Gallery */}
            <div className="relative bg-black">
              <div className="relative h-96 flex items-center justify-center">
                {selectedProject.details.media[currentMediaIndex].type === 'image' ? (
                  <img
                    src={selectedProject.details.media[currentMediaIndex].url}
                    alt={selectedProject.details.media[currentMediaIndex].caption}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <video
                    src={selectedProject.details.media[currentMediaIndex].url}
                    controls
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {/* Navigation Arrows */}
              {selectedProject.details.media.length > 1 && (
                <>
                  <button
                    onClick={prevMedia}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-3 rounded-full transition-all hover:scale-110"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextMedia}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-3 rounded-full transition-all hover:scale-110"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Media Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white text-center">
                  {selectedProject.details.media[currentMediaIndex].caption}
                </p>
              </div>

              {/* Media Indicators */}
              {selectedProject.details.media.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedProject.details.media.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentMediaIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentMediaIndex
                          ? 'bg-cyan-400 w-8'
                          : 'bg-slate-500 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Project Details Content */}
            <div className="p-6 space-y-6">
              {/* Overview */}
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Overview</h3>
                <p className="text-slate-300 leading-relaxed">{selectedProject.details.overview}</p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {selectedProject.details.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-300">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.details.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
