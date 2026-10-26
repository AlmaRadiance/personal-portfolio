import React, { useState, useEffect } from "react";
import er1Image from "../assets/er1.jpg";
import w1Image from "../assets/w1.jpg";
import erUserJourneyMapping from "../assets/er_user_journey_map.png";
import wUserJourneyMapping from "../assets/w_user_journey_map.png";
import erInformationArchitecture from "../assets/er_ia.png";
import wInformationArchitecture from "../assets/w_ia.png";
import erHighFidelity from "../assets/er_hf.png";
import erMidFidelity from "../assets/er_mf.png";
import wMidFidelity from "../assets/w_mf.png";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Users,
  Calendar,
  Briefcase,
  Layers,
  Palette,
  Zap,
  Code,
  Sparkles,
  Star,
  Heart,
  Coffee,
  Camera,
  Music,
  BookOpen,
  Mail,
  Linkedin,
  Github,
  Twitter,
  Eye,
  PenTool,
  Grid,
  Monitor,
  Target,
  TrendingUp,
  FileText,
  Lightbulb,
  CheckCircle,
  BarChart,
  Search,
  UserCheck,
  Workflow,
  Repeat,
  Filter,
  ClipboardCheck,
  SlidersHorizontal,
  MessageSquare,
  ShoppingCart,
  Shield,
  MessageCircle,
  Clock,
} from "lucide-react";
import "./Portfolio.css";

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  // const [showPersonalProjects, setShowPersonalProjects] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!selectedProject) return;

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedProject]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const featuredProjects = [
    {
      id: 1,
      title: "Eagle Reach",
      subtitle: "Building trust through transparent sustainable shopping",
      category: "Product Design",
      image: er1Image,
      heroImage: er1Image,
      tags: ["Web Platform", "Sustainability", "E-Commerce"],
      role: "Product Designer",
      duration: "6 months",
      team: "3 Designers, 5 Engineers, 2 PMs",
      company: "Eagle Reach",
      tools: "Figma, FigJam, Miro, Hotjar, Google Analytics, UserTesting",
      problemStatement:
        "Eagle Reach sells premium organic clothing (cotton, linen, hemp) and durable home goods (towels, bedding, kitchen textiles), but the website wasn't converting environmentally conscious shoppers despite growing market demand. Users abandoned their carts at rates 32% higher than industry average, citing uncertainty about sustainability claims and unclear value propositions. Key pain points identified through research: inability to verify organic certifications, lack of durability proof for 'buy it for life' home goods, confusion about material differences (organic cotton vs. linen vs. hemp), and skepticism about why products cost 2-3x conventional alternatives. The product pages and cart experience needed redesign to build trust and educate users at critical decision points.",
      goals: [
        {
          icon: Target,
          title: "Increase conversion rate",
          metric: "Target: +20% (from 1.8% to 2.2%)",
        },
        {
          icon: ShoppingCart,
          title: "Reduce cart abandonment",
          metric: "Target: ≤69.8% (industry benchmark, currently 78.4%)",
        },
        {
          icon: TrendingUp,
          title: "Boost average order value",
          metric: "Target: +12% (from $67 to $75)",
        },
        {
          icon: Shield,
          title: "Build trust in sustainability",
          metric:
            "Make organic and durability claims transparent and verifiable",
        },
        {
          icon: Heart,
          title: "Improve material education",
          metric: "Increase engagement with material comparisons by 50%",
        },
      ],
      constraints: [
        "Working within existing Shopify infrastructure",
        "Limited engineering resources (5 developers across features)",
        "6-month timeline to show measurable impact",
        "Zero budget for new photography or video content",
        "Cannot change pricing or shipping policies",
        "Must maintain current site performance and load times",
      ],

      researchMethods: [
        {
          icon: Users,
          title: "User Interviews",
          desc: "25 interviews with existing and potential customers",
          findings:
            "Users wanted proof of sustainability claims and struggled to understand why products cost more than conventional alternatives. Home goods shoppers specifically asked 'How do I know this will last 10 years?'",
        },
        {
          icon: BarChart,
          title: "Analytics Deep Dive",
          desc: "3 months of funnel analysis, heatmaps, session recordings",
          findings:
            "34% exited from product pages before adding to cart. Users scrolled looking for certifications but couldn't find them easily. Home goods pages had 42% higher exit rates than clothing.",
        },
        {
          icon: MessageSquare,
          title: "Support Ticket Analysis",
          desc: "Reviewed 200+ customer service tickets",
          findings:
            "85 tickets per month about sustainability verification, pricing justification, and durability proof. Most frequent question for home goods: 'How do I know this towel/sheet will actually last?'",
        },
        {
          icon: FileText,
          title: "Competitive Analysis",
          desc: "Analyzed 8 sustainable brands (Everlane, Patagonia, Coyuchi, Boll & Branch)",
          findings:
            "Competitors either overwhelmed with info or treated sustainability as afterthought. Few showed durability proof for home goods. Opportunity to lead with transparency + durability evidence.",
        },
        {
          icon: MessageCircle,
          title: "On-site Surveys",
          desc: "Exit intent and post-purchase surveys (630 responses)",
          findings:
            "Price objections decreased dramatically when users understood organic material benefits and saw durability proof. Cost-per-use framing resonated strongly with home goods shoppers.",
        },
      ],

      personas: [
        {
          name: "Conscious Claire",
          title: "The Committed Activist",
          age: "28, Urban Professional",
          quote:
            "I need to know my money is actually making a difference, not just making companies look good.",
          needs: [
            "Verify sustainability claims",
            "Support ethical businesses",
            "Reduce environmental footprint",
            "Products that align with values",
          ],
          painPoints: [
            "Overwhelmed by greenwashing",
            "Hard to verify certifications",
            "Limited budget for all-sustainable wardrobe and home",
          ],
          behavior:
            "Researches extensively, reads labels, follows sustainability influencers, willing to pay premium for verified ethics. Shops for both clothing and home essentials.",
        },
        {
          name: "Practical Patricia",
          title: "The Value Seeker",
          age: "35, Parent",
          quote:
            "I want to do the right thing, but I also need this to be worth the extra money.",
          needs: [
            "Buy products that last for years",
            "Feel good about purchases",
            "Stay within budget",
            "Proof of durability claims",
          ],
          painPoints: [
            "Sustainable products often too expensive",
            "Unsure if quality justifies price",
            "Needs tangible value demonstration",
            "No way to verify 'buy it for life' claims",
          ],
          behavior:
            "Compares prices across sites, looks for sales, values durability over trends, calculates cost-per-use. Primarily shops for home goods that need replacing.",
        },
        {
          name: "Lifestyle Leo",
          title: "The Aspiring Conscious Consumer",
          age: "24, Young Professional",
          quote:
            "I'm trying to make better choices, but I don't want to sacrifice style or break the bank.",
          needs: [
            "Build ethical lifestyle",
            "Learn about sustainability",
            "Look good while doing good",
            "Understand material differences",
          ],
          painPoints: [
            "Confused by terminology (organic cotton vs linen vs hemp)",
            "Worried about judgment",
            "New to sustainable shopping",
          ],
          behavior:
            "Discovers brands through Instagram, needs education about materials, values aesthetic and story equally. Starting with clothing before investing in home goods.",
        },
      ],

      userJourneyMap: {
        title: "Current State: Conscious Consumer Journey",
        image: erUserJourneyMapping,
        phases: [
          "Awareness",
          "Exploration",
          "Evaluation",
          "Decision",
          "Post-Abandonment",
        ],
        painPoints: [
          "Can't find sustainability proof or certifications",
          "No explanation why organic materials cost more",
          "No proof that home goods will actually last 10 years",
          "Confusion about material differences (cotton vs linen vs hemp)",
          "Unexpected shipping costs",
          "Cart abandonment email doesn't address concerns",
        ],
      },

      informationArchitecture: {
        desc: "Redesigned navigation to support values-based shopping and material education. Added 'Our Impact' to main nav and created persistent 'Shop by Values' filter system. Reorganized product pages to prioritize trust signals, impact metrics, and durability proof above the fold. Created dedicated material education hub.",
        changes: [
          "Added 'Our Impact' to primary navigation",
          "Created 'Shop by Values' filter (Fair Trade, Organic, Carbon Neutral)",
          "Added 'Shop by Material' (Organic Cotton, Linen, Hemp, Recycled)",
          "Moved certifications from footer to product pages",
          "Reorganized product page hierarchy: Impact metrics → Certifications → Durability proof → Product details",
          "Added 'Most Sustainable' and 'Longest Lasting' sort options",
          "Created 'Material Guide' education section",
        ],
        image: erInformationArchitecture,
      },

      wireframes: [
        // {
        //   title: "Low-Fidelity Sketches",
        //   desc: "Explored 3 layout options for impact metrics and durability proof placement on product pages. Tested different approaches for material comparison modules.",
        //   image:
        //     "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
        //   learnings:
        //     "Metrics below price tested best. Durability proof (customer photos, warranty info) needed prominent placement for home goods.",
        // },
        {
          title: "Mid-Fidelity Wireframes",
          desc: "Clickable prototypes testing certification badge placement, cart impact calculator, and lifetime value calculator for home goods.",
          image: erMidFidelity,
          learnings:
            "Cart impact summary at top reduced abandonment. Cost-per-use calculator was most compelling durability proof for home goods shoppers.",
        },
        {
          title: "High-Fidelity Designs",
          desc: "Final visual designs with Eagle Reach's brand guidelines, including durability proof modules and material comparison tools.",
          image: erHighFidelity,
          learnings:
            "Muted green accent color (#4A7C59) avoided cliché eco-branding while maintaining clarity. Customer photos of well-worn products were most effective durability proof.",
        },
      ],
      designSystem: {
        colors: {
          primary: ["#2B2B2B", "#1A1A1A", "#000000"],
          sustainability: ["#4A7C59", "#E8F5E9", "#2E4A3A"],
          neutral: ["#F5F5F5", "#E0E0E0", "#9E9E9E"],
        },
        typography: {
          fontFamily: "Circular Std",
          scale: [
            "12px",
            "14px",
            "16px",
            "18px",
            "20px",
            "24px",
            "28px",
            "36px",
          ],
          weights: ["400 (Book)", "500 (Medium)", "700 (Bold)"],
        },
        spacing: [
          "4px",
          "8px",
          "12px",
          "16px",
          "24px",
          "32px",
          "40px",
          "48px",
          "64px",
        ],
        borderRadius: ["4px", "8px", "12px", "16px", "24px"],
        shadows: [
          "0 2px 4px rgba(0,0,0,0.1)",
          "0 4px 12px rgba(0,0,0,0.15)",
          "0 8px 24px rgba(0,0,0,0.2)",
        ],
        components:
          "Created reusable impact metric components, certification badge system, cart impact calculator, durability proof modules, material comparison tools, and cost-per-use calculator. All WCAG 2.1 AA compliant.",
        designTokens:
          "Comprehensive token system with sustainability color palette, spacing scales, and component-specific variables",
        documentation:
          "Complete Figma library with component specs and usage guidelines for developer handoff",
      },

      keyFeatures: [
        {
          icon: Target,
          title: "Product Page Impact Metrics",
          desc: "Quantified sustainability impact displayed below price: 'Saves 700 gallons of water' with material-specific metrics for cotton, linen, and hemp.",
          impact:
            "94% of users noticed metrics. 67% mentioned them as purchase factor. Material-specific metrics increased engagement by 31%.",
        },
        {
          icon: ShoppingCart,
          title: "Smart Cart Impact Summary",
          desc: "Real-time calculator showing cumulative impact: water saved, workers supported, CO2 offset, and years of product life purchased.",
          impact:
            "76% engaged with summary. 31% lower abandonment for users who viewed it. Home goods shoppers particularly engaged with 'years of life' metric.",
        },
        {
          icon: Filter,
          title: "Values & Material-Based Filtering",
          desc: "Persistent filters: Fair Trade, Organic, Carbon Neutral, plus 'Shop by Material' (Cotton, Linen, Hemp, Recycled). Sort by 'Most Sustainable' or 'Longest Lasting'.",
          impact:
            "58% used values filters. 43% used material filters. 2.1x higher conversion for filtered users.",
        },
        {
          icon: BookOpen,
          title: "Interactive Material Comparison Module",
          desc: "Expandable education comparing organic cotton vs. linen vs. hemp with impact visualization, care instructions, and best-use cases.",
          impact:
            "41% expanded module. 22% higher conversion for engaged users. Reduced support tickets about materials by 48%.",
        },
        {
          icon: Star,
          title: "Certification Badge System",
          desc: "Hover tooltips explaining each certification with specific details (wage data, audit info, organic standards).",
          impact:
            "Comprehension increased from 70% to 92%. 88% said they understood certifications.",
        },
        {
          icon: Clock,
          title: "Durability & Lifetime Value Calculator",
          desc: "For home goods: Cost-per-use calculator showing '$45 towel ÷ 10 years = $4.50/year vs. $12 towel ÷ 1 year = $12/year'. Includes warranty info and customer photos of aged products.",
          impact:
            "52% of home goods shoppers engaged with calculator. 34% higher conversion on products with calculator. Reduced 'will this last?' support tickets by 61%.",
        },
        {
          icon: TrendingUp,
          title: "Free Shipping Progress Bar",
          desc: "Visual indicator in cart: 'You're so close! Add $15 more to unlock free shipping'",
          impact:
            "15% more users added items to reach threshold. AOV increased $22 average.",
        },
      ],

      iterations: [
        {
          version: "V1 - Initial Wireframes",
          feedback:
            "Impact metrics in hero banner were ignored (banner blindness). Home goods shoppers confused about material differences.",
          changes:
            "Moved metrics to below price where users already look. Added material comparison module. Created cost-per-use calculator for home goods.",
          result:
            "100% noticed metrics vs 85% before. Material education reduced confusion significantly.",
        },
        {
          version: "V2 - Mid-Fidelity",
          feedback:
            "Certification tooltips too generic. Durability claims felt unsubstantiated for home goods.",
          changes:
            "Added specific data to tooltips: '$2.50+ per hour vs $0.30 local average'. Added customer photos of products after 2, 5, 10 years of use. Integrated warranty information.",
          result:
            "Comprehension increased to 92%. Home goods trust increased from 54% to 81%.",
        },
        {
          version: "V3 - High-Fidelity",
          feedback:
            "Material comparison module overlooked too far down page. Home goods shoppers needed durability proof earlier.",
          changes:
            "Moved material module higher, added light background to draw attention. Placed durability proof (lifetime calculator + customer photos) above product description for home goods.",
          result:
            "41% engaged with material education (vs 18% before). Home goods conversion improved 28%.",
        },
        {
          version: "Final - Post-Launch",
          feedback:
            "Free shipping message felt transactional. Users wanted to see total environmental impact more prominently.",
          changes:
            "Reframed shipping message with celebratory tone. Enhanced cart impact summary to show 'years of product life' metric for durability-focused shoppers.",
          result:
            "15% more users added items. Cart engagement increased 22%. Home goods buyers particularly responded to longevity framing.",
        },
      ],

      prototype: {
        title: "Interactive Product & Cart Flow",
        desc: "High-fidelity Figma prototype demonstrating impact metrics, material comparison, certification tooltips, durability calculator, cart impact summary, and educational modules across clothing and home goods categories.",
        link: "#",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      },
      usabilityTesting: [
        "Round 1: 8 users tested wireframes. 100% found organic products successfully. 75% understood material differences after viewing comparison module.",
        "Round 2: 10 users tested high-fidelity designs. 90% could explain why products cost more. Home goods shoppers responded strongly to lifetime value calculator.",
        "Round 3: A/B testing post-launch with 2,500+ users per variant across 5 tests (including durability proof placement and calculator variants).",
        "Key finding: Impact metrics below price outperformed sidebar placement by 18%. Cost-per-use calculator on home goods increased conversion 34%.",
        "Cart impact summary at top reduced abandonment 24% more than bottom placement. 'Years of product life' metric resonated strongly.",
      ],
      accessibility: [
        "WCAG 2.1 AA compliant - 4.5:1 minimum contrast ratio on all text",
        "Full keyboard navigation support with visible focus indicators",
        "Screen reader labels for all icons and interactive elements",
        "ARIA labels for tooltips, calculators, and expandable modules",
        "Focus indicators on all clickable elements",
        "Alt text describing certification badges and impact icons",
      ],

      results: [
        {
          number: "+33%",
          label: "Conversion rate increase (exceeded 20% goal)",
          icon: TrendingUp,
          detail: "1.8% → 2.4%",
        },
        {
          number: "-12.2pts",
          label: "Cart abandonment reduction",
          icon: ShoppingCart,
          detail: "78.4% → 66.2%",
        },
        {
          number: "+18%",
          label: "Average order value growth",
          icon: Target,
          detail: "$67 → $79",
        },
        {
          number: "+86%",
          label: "Repeat purchase rate increase",
          icon: Users,
          detail: "22% → 41%",
        },
        {
          number: "+62%",
          label: "Time on product page",
          icon: Clock,
          detail: "42 sec → 68 sec",
        },
        {
          number: "-55%",
          label: "Sustainability support tickets",
          icon: MessageCircle,
          detail: "85/month → 38/month",
        },
        {
          number: "+43%",
          label: "Home goods category conversion",
          icon: Heart,
          detail: "Durability proof drove significant improvement",
        },
        {
          number: "-61%",
          label: "Durability-related support tickets",
          icon: Shield,
          detail: "Lifetime calculator answered questions proactively",
        },
      ],

      metrics: {
        before: {
          conversionRate: "1.8%",
          cartAbandonment: "78.4%",
          avgOrderValue: "$67",
          timeOnPage: "42 sec",
          repeatPurchase: "22%",
          homeGoodsConversion: "1.2%",
        },
        after: {
          conversionRate: "2.4%",
          cartAbandonment: "66.2%",
          avgOrderValue: "$79",
          timeOnPage: "68 sec",
          repeatPurchase: "41%",
          homeGoodsConversion: "1.9%",
        },
      },
      learnings:
        "Transparency builds loyalty - when users understand premium pricing and see durability proof, they become advocates. Education drives conversion - teaching about organic materials and cost-per-use reduced price objections significantly. Impact metrics motivate - gamifying sustainability increased engagement and AOV. Durability proof is essential for home goods - customer photos of well-worn products and lifetime value calculators outperformed written guarantees. Material education reduces confusion - comparing cotton vs linen vs hemp with specific use cases improved confidence. Progressive disclosure works - maintained clean design while providing information depth. Specificity beats abstraction - '700 gallons saved' and '$4.50/year over 10 years' resonate more than vague claims.",

      nextSteps: [
        "Personalized impact dashboard showing cumulative user impact over time",
        "Mobile app with native experience and push notifications for milestones",
        "Supply chain transparency map - interactive journey from farm to warehouse",
        "AR try-on integration to reduce returns (major sustainability issue)",
        "Resale marketplace for circular economy expansion",
        "Community features: forums, user photos, impact leaderboard",
      ],
    },

    {
      id: 2,
      title: "Wisepal",
      subtitle: "Guided onboarding flow for an online tutoring platform",
      category: "Product Design",
      image: w1Image,
      heroImage: w1Image,
      tags: ["Web Platform", "Ed-tech", "User Journey"],
      role: "Product Designer",
      company: "Wisepal",
      duration: "8 months",
      team: "4 Designers, 10 Engineers, 3 PMs",
      tools: "Figma, FigJam, UserTesting, Maze, Optimal Workshop",
      problemStatement:
        "Students often experience decision paralysis when searching for tutors. With hundreds of tutor profiles to browse, inconsistent information, and limited filtering capabilities, students struggle to confidently identify tutors who match their learning needs, budget, and scheduling preferences.",
      goals: [
        {
          icon: Target,
          title: "Simplify onboarding",
          metric: "Enable guided setup within 30 seconds",
        },
        {
          icon: UserCheck,
          title: "Minimize training time",
          metric: "Target: <2 hours",
        },
        {
          icon: UserCheck,
          title: "Boost confidence",
          metric: "Help learners feel more certain in their tutor selection",
        },
        {
          icon: CheckCircle,
          title: "Improve discoverability",
          metric: "Make tutor discovery feel intuitive and personalized",
        },
        {
          icon: Heart,
          title: "Build trust",
          metric: "Enhance transparency and consistency across profiles",
        },
      ],
      constraints: [
        "Protect sensitive tutor and learner information",
        "Ensure fairness and transparency in matching",
        "Integrate seamlessly with existing backend systems",
        "Maintain accessibility and responsiveness across devices",
      ],
      researchMethods: [
        {
          icon: Users,
          title: "User Interviews",
          desc: "24 interviews with students, parents, and adult learners",
          findings:
            "Users wanted guidance over options and clearer trust signals when choosing tutors.",
        },
        {
          icon: BarChart,
          title: "Behavioral Analytics",
          desc: "Reviewed funnel analytics and heatmaps",
          findings:
            "High drop-off between browsing tutors and completing bookings due to choice overload.",
        },
        {
          icon: MessageSquare,
          title: "Support Ticket Review",
          desc: "Analyzed 300+ student support tickets",
          findings:
            "Frequent questions about tutor reliability and scheduling availability.",
        },
        {
          icon: FileText,
          title: "Competitive Audit",
          desc: "Reviewed top 5 online learning and booking platforms",
          findings:
            "Platforms with guided flows showed higher perceived value and faster decision times.",
        },
      ],
      personas: [
        {
          name: "Alex Chen",
          title: "College Student",
          quote:
            "I just want a tutor who fits my schedule and budget — without spending an hour searching.",
          needs: ["Quick setup", "Affordable tutors", "Mobile-friendly access"],
          painPoints: ["Choice overload", "Unclear quality indicators"],
        },
        {
          name: "Jennifer Lee",
          title: "Parent of High School Student",
          quote:
            "I want to know my child's tutor is trustworthy and qualified before booking.",
          needs: [
            "Clear credentials",
            "Transparent reviews",
            "Safety assurance",
          ],
          painPoints: ["Too many options", "Inconsistent profile information"],
        },
      ],
      userJourneyMap: {
        title: "Learner Onboarding Journey",
        image: wUserJourneyMapping,
        phases: ["Browse Tutors", "Filter/Search", "Compare", "Select", "Book"],
        painPoints: [
          "Overwhelming number of profiles",
          "Lack of guidance",
          "Difficult comparisons",
          "Unclear availability",
        ],
      },
      informationArchitecture: {
        desc: "Redesigned the onboarding flow and search hierarchy based on card sorting and user feedback, simplifying tutor discovery into three key steps: define needs, explore matches, confirm selection.",
        image: wInformationArchitecture,
      },
      wireframes: [
        // {
        //   title: "Initial Concepts",
        //   desc: "Explored quick-match, guided, and browsing-first flows.",
        //   image:
        //     "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
        // },
        {
          title: "Mid-Fidelity Flows",
          desc: "Tested guided onboarding with optional personalization.",
          // image:
          //   "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
          image: wMidFidelity,
        },
        // {
        //   title: "Final High-Fidelity Designs",
        //   desc: "Delivered cohesive, responsive UI using the updated design system.",
        //   image:
        //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        // },
      ],
      designSystem: {
        colors: {
          primary: ["#2563EB", "#3B82F6", "#60A5FA"],
          secondary: ["#9333EA", "#A855F7", "#C084FC"],
          neutral: ["#111827", "#6B7280", "#F9FAFB"],
          warning: ["#F59E0B", "#FBBF24", "#FCD34D"],
          error: ["#EF4444", "#F87171", "#FCA5A5"],
        },
        typography: {
          fontFamily: "Inter, sans-serif",
          scale: ["12px", "14px", "16px", "18px", "24px", "32px", "48px"],
          weights: ["400", "500", "600", "700"],
        },
        spacing: [
          "4px",
          "8px",
          "12px",
          "16px",
          "24px",
          "32px",
          "48px",
          "64px",
          "96px",
        ],
        borderRadius: ["4px", "8px", "12px", "16px", "24px", "full"],
        shadows: [
          "0 1px 3px rgba(0,0,0,0.1)",
          "0 4px 12px rgba(0,0,0,0.15)",
          "0 8px 32px rgba(0,0,0,0.2)",
        ],
        components:
          "Rebuilt component library with 100+ reusable blocks for forms, search results, and filters. WCAG AA compliant and responsive.",
        designTokens:
          "Comprehensive token system supporting multiple themes and dark mode",
        documentation:
          "Comprehensive Figma library and handoff documentation integrated with Storybook.",
      },
      keyFeatures: [
        {
          icon: ClipboardCheck,
          title: "Quick Match Questionnaire",
          desc: "Optional guided setup to generate personalized tutor recommendations.",
        },
        {
          icon: Star,
          title: "Top Matches Section",
          desc: "Displays 4–6 recommended tutors based on preferences and availability.",
        },
        {
          icon: SlidersHorizontal,
          title: "Enhanced Filters",
          desc: "Improved discoverability through simplified subject, price, and availability filters.",
        },
        {
          icon: MessageSquare,
          title: "Quick Actions",
          desc: "One-click access to common tasks and workflows",
        },
      ],
      iterations: [
        {
          version: "V1",
          feedback: "Users felt forced into the guided flow.",
          changes: "Made onboarding optional and flexible.",
        },
        {
          version: "V2",
          feedback: "Tutor cards looked too similar.",
          changes: "Added trust badges and improved visual hierarchy.",
        },
        {
          version: "V3",
          feedback: "Mobile shortlist not discoverable.",
          changes: "Introduced persistent bottom navigation for saved tutors.",
        },
        {
          version: "Final",
          feedback: "Clearer guidance, faster decisions.",
          changes: "Refined match explanations and accessibility support.",
        },
      ],
      prototype: {
        title: "Guided Onboarding Prototype",
        desc: "Interactive Figma prototype simulating the end-to-end onboarding flow.",
        link: "#",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      },
      usabilityTesting: [
        "Tested with 20 learners (students and parents)",
        "Observed faster completion of the onboarding flow",
        "Reported higher confidence in tutor selection",
        "Improved discoverability of comparison features",
      ],
      accessibility: [
        "WCAG 2.1 AA compliant color and contrast",
        "Full keyboard navigation support",
        "Screen reader labels on all actionable elements",
        "Responsive layouts tested across mobile, tablet, desktop",
      ],
      results: [
        { number: "42%", label: "Improved learner confidence", icon: Heart },
        { number: "28%", label: "Reduced decision fatigue", icon: Zap },
        {
          number: "55%",
          label: "Increased engagement post-onboarding",
          icon: CheckCircle,
        },
        {
          number: "37%",
          label: "Enhanced tutor visibility fairness",
          icon: Users,
        },
      ],
      // metrics: {
      //   before: {
      //     completionRate: "62%",
      //     taskTime: "4.8 min",
      //     dropOffRate: "38%",
      //   },
      //   after: {
      //     completionRate: "91%",
      //     taskTime: "2.1 min",
      //     dropOffRate: "12%",
      //   },
      // },

      // learnings:
      //   "Designing for guided onboarding requires balancing help and autonomy. Optional personalization performed better than forced automation. Transparent trust signals were key to confidence and engagement.",
      // nextSteps: [
      //   "Introduce learning-style–based tutor matching",
      //   "Add session previews for better expectation setting",
      //   "Expand onboarding analytics for personalization insights",
      // ],
    },
  ];

  // const personalProjects = [
  //   {
  //     id: 101,
  //     title: "Meditation App Concept",
  //     subtitle: "Mindfulness for modern life",
  //     category: "Personal Project",
  //     image:
  //       "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
  //     tags: ["Mobile", "Wellness", "UI Design"],
  //     icon: Heart,
  //     description:
  //       "A peaceful meditation app designed to help busy professionals find moments of calm in their hectic days.",
  //     challenge:
  //       "Most meditation apps are either too complex or too simple. I wanted to create something that felt personal and adaptive.",
  //     solution:
  //       "Designed an AI-powered app that learns user preferences and suggests the perfect meditation based on time of day, mood, and schedule.",
  //     features: [
  //       {
  //         icon: Sparkles,
  //         title: "Smart Recommendations",
  //         desc: "AI suggests meditations based on your mood and time available",
  //       },
  //       {
  //         icon: Heart,
  //         title: "Progress Tracking",
  //         desc: "Beautiful visualizations of your mindfulness journey",
  //       },
  //       {
  //         icon: Music,
  //         title: "Curated Soundscapes",
  //         desc: "Premium audio experiences designed by sound engineers",
  //       },
  //       {
  //         icon: Target,
  //         title: "Daily Goals",
  //         desc: "Set and track personalized meditation goals",
  //       },
  //       {
  //         icon: Users,
  //         title: "Community Support",
  //         desc: "Connect with other meditators and share experiences",
  //       },
  //       {
  //         icon: Calendar,
  //         title: "Streaks & Rewards",
  //         desc: "Gamification to maintain consistent practice",
  //       },
  //     ],
  //     designProcess:
  //       "Started with competitor research, created personas, sketched 50+ screens, and built an interactive prototype in Figma.",
  //     mockups: [
  //       "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
  //       "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80",
  //       "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
  //     ],
  //     tools: "Figma, Principle, After Effects",
  //     duration: "3 weeks",
  //     learnings:
  //       "Working on passion projects allows complete creative freedom, but discipline is key to actually finishing them.",
  //   },
  // ];

  if (selectedProject) {
    const project = selectedProject;
    const isFeatured = featuredProjects.find((p) => p.id === project.id);
    // const isPersonal = personalProjects.find((p) => p.id === project.id);

    // if (isPersonal) {
    //   return (
    //     <div className="case-study">
    //       <div
    //         className="scroll-progress"
    //         style={{ width: `${scrollProgress}%` }}
    //       ></div>

    //       <div className="case-study-header">
    //         <button
    //           className="back-btn"
    //           onClick={() => setSelectedProject(null)}
    //         >
    //           <ArrowLeft size={20} />
    //           <span>Back</span>
    //         </button>
    //         <div className="case-category">{project.category}</div>
    //       </div>

    // <div className="case-hero-modern">
    //   <div className="hero-gradient"></div>
    //   <div className="case-hero-content">
    //     <div className="case-hero-badge">
    //       <project.icon size={20} />
    //       <span>{project.category}</span>
    //     </div>
    //     <h1>{project.title}</h1>
    //     <p>{project.subtitle}</p>
    //   </div>
    // </div>

    // <div className="case-content">
    //   <section id="overview" className="overview-section">
    //     <h2>Project Overview</h2>
    //     <p className="large-text">{project.description}</p>
    //     <div className="project-meta-simple">
    //       <div>
    //         <strong>Duration:</strong> {project.duration}
    //       </div>
    //       <div>
    //         <strong>Tools:</strong> {project.tools}
    //       </div>
    //     </div>
    //   </section>

    // <div className="challenge-solution-grid">
    //   <div className="cs-card challenge-card">
    //     <Target size={32} />
    //     <h3>The Challenge</h3>
    //     <p>{project.challenge}</p>
    //   </div>
    //   <div className="cs-card solution-card">
    //     <Lightbulb size={32} />
    //     <h3>The Solution</h3>
    //     <p>{project.solution}</p>
    //   </div>
    // </div>

    // <section>
    //   <div className="section-header">
    //     <Sparkles size={36} />
    //     <div>
    //       <h2>Key Features</h2>
    //       <p className="section-subtitle">
    //         What makes this project special
    //       </p>
    //     </div>
    //   </div>
    //   <div className="features-grid-personal">
    //     {project.features.map((feature, idx) => (
    //       <div key={idx} className="feature-card-personal">
    //         <feature.icon size={32} />
    //         <h3>{feature.title}</h3>
    //         <p>{feature.desc}</p>
    //       </div>
    //     ))}
    //   </div>
    // </section>

    // <section>
    //   <h2>Design Process</h2>
    //   <p className="large-text">{project.designProcess}</p>
    // </section>

    // <section className="mockups-section">
    //   <h2>Design Mockups</h2>
    //   <div className="mockups-grid">
    //     {project.mockups.map((mockup, idx) => (
    //       <div key={idx} className="mockup-item">
    //         <img
    //           src={mockup}
    //           alt={`${project.title} mockup ${idx + 1}`}
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </section>

    //         <section className="learnings-section">
    //           <div className="learnings-card">
    //             <BookOpen size={40} />
    //             <h3>What I Learned</h3>
    //             <p>{project.learnings}</p>
    //           </div>
    //         </section>

    //         <button
    //           className="back-to-projects-btn"
    //           onClick={() => setSelectedProject(null)}
    //         >
    //           <ArrowLeft size={20} />
    //           Back to All Projects
    //         </button>
    //       </div>
    //     </div>
    //   );
    // }

    // Featured Project View
    const currentIndex = featuredProjects.findIndex((p) => p.id === project.id);

    // return (
    //   <div className="case-study">
    return (
      <div
        className={`case-study ${project.company
          .toLowerCase()
          .replace(/\s+/g, "-")}-study`}
      >
        <div
          className="scroll-progress"
          style={{ width: `${scrollProgress}%` }}
        ></div>
        <div className="case-study-header">
          <button className="back-btn" onClick={() => setSelectedProject(null)}>
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <div className="case-category">{project.category}</div>
        </div>
        {/* <div
          className="case-hero-modern"
          style={{
            backgroundImage: `url("${project.heroImage || project.image}")`,
          }}
        >
          <div className="hero-gradient"></div>
          <h1 className="case-title">
            <span
              className={`company-name company-name--${project.company
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              {project.company}
            </span>
          </h1>
        </div> */}

        <div
          className={`case-hero-modern case-hero--${project.company
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
          style={{
            backgroundImage: `url("${project.heroImage || project.image}")`,
          }}
        >
          <div className="hero-gradient"></div>
          <h1 className="case-title">
            <span
              className={`company-name company-name--${project.company
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              {project.company}
            </span>
          </h1>
        </div>

        {/* ------------ */}

        <div className="case-study-layout">
          <div className="case-content">
            <div className="case-meta-grid">
              <div className="meta-card">
                <Briefcase size={28} />
                <div>
                  <h4>Role</h4>
                  <p>{project.role}</p>
                </div>
              </div>
              <div className="meta-card">
                <Calendar size={28} />
                <div>
                  <h4>Duration</h4>
                  <p>{project.duration}</p>
                </div>
              </div>
              <div className="meta-card">
                <Users size={28} />
                <div>
                  <h4>Team</h4>
                  <p>{project.team}</p>
                </div>
              </div>
              <div className="meta-card">
                <Star size={28} />
                <div>
                  <h4>Company</h4>
                  <p>{project.company}</p>
                </div>
              </div>
            </div>

            <section id="problem" className="problem-section">
              <div className="section-header">
                <Target size={36} />
                <div>
                  <h2>Problem Statement</h2>
                  <p className="section-subtitle">
                    Understanding the core challenge
                  </p>
                </div>
              </div>
              <div className="problem-box">
                <p className="large-text">{project.problemStatement}</p>
              </div>
            </section>

            <section id="goals">
              <div className="section-header">
                <TrendingUp size={36} />
                <div>
                  <h2>Project Goals</h2>
                  <p className="section-subtitle">What we aimed to achieve</p>
                </div>
              </div>
              <div className="goals-grid">
                {project.goals.map((goal, idx) => (
                  <div key={idx} className="goal-card">
                    <goal.icon size={28} />
                    <h4>{goal.title}</h4>
                    {/* <p>{goal.metric}</p> */}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="subsection-title">Constraints & Considerations</h3>
              <div className="constraints-list">
                {project.constraints.map((constraint, idx) => (
                  <div key={idx} className="constraint-item">
                    <CheckCircle size={20} />
                    <p>{constraint}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="research" className="research-section">
              <div className="section-header">
                <Search size={36} />
                <div>
                  <h2>Research & Discovery</h2>
                  <p className="section-subtitle">
                    Understanding users and their needs
                  </p>
                </div>
              </div>

              <div className="research-methods-grid">
                {project.researchMethods.map((method, idx) => (
                  <div key={idx} className="research-method-card">
                    <div className="research-icon">
                      <method.icon size={24} />
                    </div>
                    <h4>{method.title}</h4>
                    <p className="method-desc">{method.desc}</p>
                    <div className="findings-box">
                      <strong>Key Finding:</strong> {method.findings}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="personas">
              <div className="section-header">
                <Users size={36} />
                <div>
                  <h2>User Personas</h2>
                  <p className="section-subtitle">Who we're designing for</p>
                </div>
              </div>
              <div className="personas-grid">
                {project.personas.map((persona, idx) => (
                  <div key={idx} className="persona-card">
                    <div className="persona-header">
                      <div className="persona-avatar">
                        <Users size={32} />
                      </div>
                      <div>
                        <h3>{persona.name}</h3>
                        <p className="persona-title">{persona.title}</p>
                      </div>
                    </div>
                    <div className="persona-quote">"{persona.quote}"</div>
                    <div className="persona-section">
                      <h5>Needs</h5>
                      <ul>
                        {persona.needs.map((need, i) => (
                          <li key={i}>{need}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="persona-section">
                      <h5>Pain Points</h5>
                      <ul>
                        {persona.painPoints.map((pain, i) => (
                          <li key={i}>{pain}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="journey">
              <div className="section-header">
                <Workflow size={36} />
                <div>
                  <h2>User Journey Mapping</h2>
                  <p className="section-subtitle">
                    Visualizing the user experience
                  </p>
                </div>
              </div>
              <div className="journey-map">
                <img
                  src={project.userJourneyMap.image}
                  alt={project.userJourneyMap.title}
                />
                <div className="journey-details">
                  <h4>{project.userJourneyMap.title}</h4>
                  <div className="journey-phases">
                    {project.userJourneyMap.phases.map((phase, idx) => (
                      <div key={idx} className="phase-tag">
                        {phase}
                      </div>
                    ))}
                  </div>
                  <div className="pain-points-list">
                    <strong>Key Pain Points:</strong>
                    {project.userJourneyMap.painPoints.map((pain, idx) => (
                      <span key={idx} className="pain-tag">
                        {pain}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id="ia">
              <div className="section-header">
                <Grid size={36} />
                <div>
                  <h2>Information Architecture</h2>
                  <p className="section-subtitle">
                    Organizing content for clarity
                  </p>
                </div>
              </div>
              <div className="ia-section">
                <p className="large-text">
                  {project.informationArchitecture.desc}
                </p>
                <div className="ia-image">
                  <img
                    src={project.informationArchitecture.image}
                    alt="Information Architecture"
                  />
                </div>
              </div>
            </section>

            <section id="wireframes" className="wireframes-section">
              <div className="section-header">
                <PenTool size={36} />
                <div>
                  <h2>Wireframes & Design Evolution</h2>
                  <p className="section-subtitle">
                    From sketches to high-fidelity
                  </p>
                </div>
              </div>

              <div className="wireframes-grid">
                {project.wireframes.map((wf, idx) => (
                  <div key={idx} className="wireframe-card">
                    <div className="wireframe-image">
                      <img src={wf.image} alt={wf.title} />
                    </div>
                    <div className="wireframe-content">
                      <h3>{wf.title}</h3>
                      <p>{wf.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="design-system" className="design-system-section">
              <div className="section-header">
                <Palette size={36} />
                <div>
                  <h2>Design System</h2>
                  <p className="section-subtitle">
                    Building a scalable foundation
                  </p>
                </div>
              </div>

              <div className="ds-grid">
                <div className="ds-card">
                  <h4>Color Palette</h4>
                  <div className="color-categories">
                    {Object.entries(project.designSystem.colors).map(
                      ([category, colors]) => (
                        <div key={category} className="color-category">
                          <div className="category-label">{category}</div>
                          <div className="color-swatches">
                            {colors.map((color, idx) => (
                              <div
                                key={idx}
                                className="color-swatch"
                                style={{ background: color }}
                              >
                                <span>{color}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="ds-card">
                  <h4>Typography System</h4>
                  <div className="typography-details">
                    <div className="typo-item">
                      <strong>Font Family:</strong>
                      <p className="typography-sample">
                        {project.designSystem.typography.fontFamily}
                      </p>
                    </div>
                    <div className="typo-item">
                      <strong>Type Scale:</strong>
                      <div className="type-scale">
                        {project.designSystem.typography.scale.map(
                          (size, idx) => (
                            <span key={idx} className="scale-item">
                              {size}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    <div className="typo-item">
                      <strong>Font Weights:</strong>
                      <div className="font-weights">
                        {project.designSystem.typography.weights.map(
                          (weight, idx) => (
                            <span
                              key={idx}
                              className="weight-sample"
                              style={{ fontWeight: weight }}
                            >
                              {weight}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ds-card">
                  <h4>Spacing System</h4>
                  <div className="spacing-visual">
                    {project.designSystem.spacing.map((space, idx) => (
                      <div key={idx} className="spacing-item">
                        <div
                          className="spacing-bar"
                          style={{ width: space }}
                        ></div>
                        <span>{space}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="ds-card">
                  <h4>Border Radius</h4>
                  <div className="radius-visual">
                    {project.designSystem.borderRadius.map((radius, idx) => (
                      <div key={idx} className="radius-item">
                        <div
                          className="radius-box"
                          style={{ borderRadius: radius }}
                        ></div>
                        <span>{radius}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="ds-card full-width">
                  <h4>Component Library</h4>
                  <p>{project.designSystem.components}</p>
                  <div className="ds-features">
                    <div className="ds-feature">
                      <CheckCircle size={20} />
                      <span>{project.designSystem.designTokens}</span>
                    </div>
                    <div className="ds-feature">
                      <CheckCircle size={20} />
                      <span>{project.designSystem.documentation}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="features">
              <div className="section-header">
                <Sparkles size={36} />
                <div>
                  <h2>Key Features</h2>
                  <p className="section-subtitle">Solving user problems</p>
                </div>
              </div>
              <div className="features-grid">
                {project.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="feature-card">
                    <feature.icon size={32} />
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="iterations">
              <div className="section-header">
                <Repeat size={36} />
                <div>
                  <h2>Design Iterations</h2>
                  <p className="section-subtitle">Refining through feedback</p>
                </div>
              </div>
              <div className="iterations-timeline">
                {project.iterations.map((iteration, idx) => (
                  <div key={idx} className="iteration-item">
                    <div className="iteration-badge">{iteration.version}</div>
                    <div className="iteration-content">
                      <p className="iteration-feedback">
                        <strong>Feedback:</strong> {iteration.feedback}
                      </p>
                      <p className="iteration-changes">
                        <strong>Changes:</strong> {iteration.changes}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* <section id="prototype" className="prototype-section">
              <div className="prototype-hero">
                <img
                  src={project.prototype.image}
                  alt={project.prototype.title}
                />
                <div className="prototype-overlay">
                  <Code size={48} />
                  <h3>{project.prototype.title}</h3>
                  <p>{project.prototype.desc}</p>
                  <a href={project.prototype.link} className="prototype-btn">
                    <ExternalLink size={20} />
                    View Prototype
                  </a>
                </div>
              </div>
            </section> */}

            <section id="testing" className="testing-section">
              <div className="section-header">
                <UserCheck size={36} />
                <div>
                  <h2>Usability Testing</h2>
                  <p className="section-subtitle">Validating the design</p>
                </div>
              </div>

              <div className="testing-list">
                {project.usabilityTesting.map((item, idx) => (
                  <div key={idx} className="testing-item">
                    <div className="testing-number">{idx + 1}</div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="accessibility">
              <div className="section-header">
                <Eye size={36} />
                <div>
                  <h2>Accessibility</h2>
                  <p className="section-subtitle">Designing for everyone</p>
                </div>
              </div>
              <div className="accessibility-grid">
                {project.accessibility.map((item, idx) => (
                  <div key={idx} className="accessibility-item">
                    <CheckCircle size={24} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* <section id="results" className="results-section">
              <h2>Results & Impact</h2>
              <div className="results-grid">
                {project.results.map((result, idx) => (
                  <div key={idx} className="result-card">
                    <result.icon size={40} />
                    <div className="result-number">{result.number}</div>
                    <div className="result-label">{result.label}</div>
                  </div>
                ))}
              </div>
            </section> */}

            {/* <section>
              <h3 className="subsection-title">Before vs. After</h3>
              <div className="metrics-comparison">
                <div className="metrics-col">
                  <h4>Before</h4>
                  {Object.entries(project.metrics.before).map(
                    ([key, value]) => (
                      <div key={key} className="metric-row">
                        <span className="metric-label">
                          {key.replace(/([A-Z])/g, " $1").trim()}:
                        </span>
                        <span className="metric-value before">{value}</span>
                      </div>
                    )
                  )}
                </div>
                <div className="metrics-arrow">→</div>
                <div className="metrics-col">
                  <h4>After</h4>
                  {Object.entries(project.metrics.after).map(([key, value]) => (
                    <div key={key} className="metric-row">
                      <span className="metric-label">
                        {key.replace(/([A-Z])/g, " $1").trim()}:
                      </span>
                      <span className="metric-value after">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section> */}

            {/* <section id="learnings" className="learnings-section">
              <div className="learnings-card">
                <Lightbulb size={40} />
                <h3>Key Learnings</h3>
                <p>{project.learnings}</p>
              </div>
            </section> */}

            {/* <section id="next-steps">
              <div className="section-header">
                <ArrowRight size={36} />
                <div>
                  <h2>Next Steps & Future Roadmap</h2>
                  <p className="section-subtitle">Where we go from here</p>
                </div>
              </div>
              <div className="next-steps-list">
                {project.nextSteps.map((step, idx) => (
                  <div key={idx} className="next-step-item">
                    <div className="step-number">{idx + 1}</div>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </section> */}

            {/* {project.quote && (
              <div className="testimonials-section">
                <div className="testimonial-card">
                  <div className="quote-icon">
                    <Star size={32} />
                  </div>
                  <p className="quote-text">"{project.quote}"</p>
                  <p className="quote-author">{project.quoteAuthor}</p>
                </div>

                {project.pressQuote && (
                  <div className="press-quote">
                    <p className="press-text">"{project.pressQuote}"</p>
                    <p className="press-source">— {project.pressSource}</p>
                  </div>
                )}
              </div>
            )} */}

            <div className="case-navigation">
              <button
                className="nav-btn prev-btn"
                onClick={() => {
                  const prevIndex =
                    currentIndex === 0
                      ? featuredProjects.length - 1
                      : currentIndex - 1;
                  setSelectedProject(featuredProjects[prevIndex]);
                  window.scrollTo(0, 0);
                }}
              >
                <ArrowLeft size={20} />
                <span>Previous Case Study</span>
              </button>
              <button
                className="nav-btn next-btn"
                onClick={() => {
                  const nextIndex =
                    (currentIndex + 1) % featuredProjects.length;
                  setSelectedProject(featuredProjects[nextIndex]);
                  window.scrollTo(0, 0);
                }}
              >
                <span>Next Case Study</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* ========== RIGHT COLUMN: Sidebar Navigation ========== */}
          <nav className="case-study-nav">
            {[
              { id: "problem", label: "Problem" },
              { id: "goals", label: "Goals" },
              { id: "research", label: "Research" },
              { id: "personas", label: "Personas" },
              { id: "journey", label: "Journey Mapping" },
              { id: "ia", label: "Information Architecture" },
              { id: "wireframes", label: "Wireframes" },
              { id: "design-system", label: "Design System" },
              { id: "features", label: "Features" },
              { id: "iterations", label: "Iterations" },
              // { id: "prototype", label: "Prototype" },
              { id: "testing", label: "Testing" },
              { id: "accessibility", label: "Accessibility" },
              // { id: "results", label: "Results" },
              // { id: "learnings", label: "Learnings" },
            ].map((item) => (
              <div
                key={item.id}
                className={`case-nav-item ${
                  activeSection === item.id ? "active" : ""
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="case-nav-label">{item.label}</span>
              </div>
            ))}
          </nav>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-links">
            <a href="#about">ABOUT</a>
            <a href="#work">WORK</a>
            <a href="#contact" className="contact-btn">
              CONNECT
            </a>
          </div>
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>
              ABOUT
            </a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)}>
              WORK
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              CONTACT
            </a>
          </div>
        )}
      </nav>
      {/* <section id="about" className="about-hero"> */}
  
<section id="about" className="about-hero">
        <div className="about-container">
          <h1 className="about-title"> WELCOME </h1>
          <h2 className="about-subtitle">
            USER EXPERIENCE • DESIGN • TECHNOLOGY
          </h2>
          <p className="about-description">
            My name is Alma, and I’m a product designer creating meaningful,
            user-centered experiences.
          </p>

          <div className="hero-buttons">
            <a href="#work" className="btn-primary">
              View Work
            </a>
            <a href="#contact" className="btn-secondary">
              Say Hello
            </a>
          </div>
          <h2 className="section-divider"> ABOUT </h2>
          <div className="about-bio-box">
            <p className="about-description">
            I’m a product designer based in New York City with experience in e-commerce and ed-tech. I hold a bachelor’s degree in economics and psychology, which influences how I approach user behavior, decision-making, and digital systems.
            </p>

            <p className="about-description">
I was drawn to product design through a curiosity about how digital products shape everyday experiences. I enjoy breaking down complex problems, defining clear information architecture, and translating research into intuitive, user-centered solutions. My work focuses on research, usability, accessibility, and clarity, with an emphasis on designing purposeful interfaces and flows that balance user needs with business goals—especially in learning and commerce contexts.            </p>
            <p className="about-description">
Outside of work, I enjoy drawing, painting, and visiting museums, finding inspiration in art, culture, and the everyday creativity of New York City.            </p>
            
          </div>
          <div className="social-buttons">
            <a
              href="https://www.linkedin.com/in/alma-plaku/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-linkedin"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>

            <a
              href="https://github.com/AlmaRadiance"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
          <div className="expertise-grid">
            <div className="expertise-card">
              <Layers size={32} />
              <h3>Experience Design</h3>
              <p>
                User research, Information architecture, user journeys,
                wireframing prototyping, and interaction design
              </p>
            </div>
            <div className="expertise-card">
              <Palette size={32} />
              <h3>Visual Design</h3>
              <p>
                UI design, visual hierarchy, typography, layout, and design
                systems
              </p>
            </div>
            <div className="expertise-card">
              <Code size={32} />
              <h3>Development</h3>
              <p>Front-end developemnt using HTML, CSS, JavaScript and React</p>
            </div>
            {/* <div className="expertise-card">
              <Zap size={32} />
              <h3>AI & ML</h3>
              <p>Designing intelligent, adaptive experiences</p>
            </div> */}
          </div>
        </div>
        <button className="scroll-indicator" onClick={scrollToWork}>
          ↓
        </button>
      </section>

      <section id="work" className="featured-work">
        <div className="section-header-main">
          <h2>Featured Work</h2>
          <p>Selected projects showcasing my design process and impact</p>
        </div>

        <div className="featured-container">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="featured-project"
              onClick={() => setSelectedProject(project)}
            >
              <div className="featured-project-image">
                <img src={project.image} alt={project.title} />
                <div className="featured-project-overlay">
                  <button className="view-project-link">
                    <Eye size={20} />
                    View Case Study
                  </button>
                </div>
              </div>
              <div className="featured-project-content">
                <div className="project-category-badge">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <section className="personal-projects">
        <div className="section-header-main">
          <h2>Personal Projects</h2>
          <p>Passion projects and design explorations</p>
        </div> */}

      {/* <div className="personal-grid">
          {personalProjects
            .slice(0, showPersonalProjects ? personalProjects.length : 3)
            .map((project) => (
              <div
                key={project.id}
                className="personal-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="personal-image">
                  <img src={project.image} alt={project.title} />
                  <div className="personal-hover-overlay">
                    <div className="view-project-btn">
                      <span>View Project</span>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                  <div className="personal-icon">
                    <project.icon size={24} />
                  </div>
                </div>
                <div className="personal-content">
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                  <div className="personal-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="personal-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div> */}

      {/* {!showPersonalProjects && personalProjects.length > 3 && (
          <button
            className="show-more-btn"
            onClick={() => setShowPersonalProjects(true)}
          >
            <span>Show More Projects</span>
            <div className="plus-icon">+</div>
          </button>
        )} */}
      {/* </section> */}
      <footer id="contact" className="footer">
        <div className="footer-content">
          <div className="footer-main">
            <h2>Let's Create Something Amazing</h2>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities.
            </p>
            <a href="mailto:almapl12345@gmail.com" className="footer-email">
              <Mail size={22} />
              Message
            </a>
          </div>

          <div className="footer-bottom">
            <div className="footer-social">
              <a
                href="https://www.linkedin.com/in/alma-plaku/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://github.com/AlmaRadiance"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
            </div>
            <div className="footer-copyright">
              © 2025 Alma Plaku. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
