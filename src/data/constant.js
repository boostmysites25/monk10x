import logo from "../assets/logo/logo.png";

// services icons (website)
import { ReactComponent as icon1 } from "../assets/svg/services/AI Development.svg";
import { ReactComponent as icon2 } from "../assets/svg/services/Web Development.svg";
import { ReactComponent as icon3 } from "../assets/svg/services/App Development.svg";
import { ReactComponent as icon4 } from "../assets/svg/services/Hybrid App Development.svg";
import { ReactComponent as icon5 } from "../assets/svg/services/IT consultancy and strategy.svg";
import { ReactComponent as icon6 } from "../assets/svg/services/IT Infrastructure.svg";

// app development services icons
import { ReactComponent as appIcon1 } from "../assets/svg/services/iOS App Development.svg";
import { ReactComponent as appIcon2 } from "../assets/svg/services/Android.svg";
import { ReactComponent as appIcon3 } from "../assets/svg/services/Flutter.svg";
import { ReactComponent as appIcon4 } from "../assets/svg/services/Hybrid App Development.svg";

// web development services icons
import { ReactComponent as webIcon1 } from "../assets/svg/services/E-Commerce Development.svg";
import { ReactComponent as webIcon2 } from "../assets/svg/services/Social Media Websites.svg";
import { ReactComponent as webIcon3 } from "../assets/svg/services/Web Development.svg";
import { ReactComponent as webIcon4 } from "../assets/svg/services/UIUX Design.svg";

export { logo };

export const companyDetails = {
  email: "support@monk10x.com",
  phone: "+918637811200",
  address:
    "Flat 302 Fresco Tower 3 Uniworld city AA-3 New Town,Opposite Rosedale Apartment North 24 Parganas PIN - 700160",
  linkedin: "https://www.linkedin.com/company/monk10x/",
  instagram: "https://www.instagram.com/monk10x.ai?igsh=MzNrbXVpZ3p2bXg2",
};

// Web Development Testimonials
export const webTestimonials = [
  {
    name: "Arjun Mehta",
    designation: "CEO, Tech Innovators",
    image: require("../assets/images/testimonial/2.jpg"),
    review:
      "The team at Monk10x delivered a tailored web development solution that exceeded our expectations. Their attention to detail and innovative approach helped us create a highly engaging website. They were professional, met all deadlines, and provided exceptional post-launch support. We're thrilled with the results and how it positively impacted our online presence.",
  },
  {
    name: "Emma Johnson",
    designation: "VP of Operations, DigitalCorp UK",
    image: require("../assets/images/testimonial/5.webp"),
    review:
      "Monk10x transformed our e-commerce website with exceptional web development services. Their strategic approach and deep technical expertise helped us create a powerful online presence that drives sales. The team's professionalism and commitment to delivering results on time was outstanding. Our online revenue has increased by 45% since launching the new website.",
  },
  {
    name: "Sarah Mitchell",
    designation: "Director of Innovation, GlobalTech Australia",
    image: require("../assets/images/testimonial/7.webp"),
    review:
      "We partnered with Monk10x for our e-commerce platform development, and the results have been phenomenal. Their team delivered a robust, scalable solution that has boosted our online sales by 65%. The platform's performance and user-friendly interface have significantly enhanced our customer satisfaction. Monk10x truly understands modern e-commerce needs.",
  },
  {
    name: "Arun Nair",
    designation: "CTO, CodeWorks Inc.",
    image: require("../assets/images/testimonial/4.jpg"),
    review:
      "The web development services from Monk10x were top-notch. They understood our requirements perfectly and delivered a high-quality, scalable website on time. Their team was professional, responsive, and ensured that the final product exceeded all our expectations. Our website now perfectly represents our brand and drives meaningful conversions.",
  },
  {
    name: "Robert Chen",
    designation: "Marketing Director, StartupFlow",
    image: require("../assets/images/testimonial/3.jpg"),
    review:
      "Monk10x created an outstanding landing page that dramatically improved our conversion rates. Their web design expertise and attention to user experience details resulted in a 78% increase in lead generation. The responsive design works flawlessly across all devices, and the loading speed is exceptional.",
  },
];

// App Development Testimonials
export const appTestimonials = [
  {
    name: "Priya Sharma",
    designation: "Product Manager, Appify Co.",
    image: require("../assets/images/testimonial/1.jpg"),
    review:
      "Working with Monk10x on our mobile app development was a fantastic experience. They delivered a user-friendly iOS and Android app that exceeded our expectations. The team was highly responsive and flexible, and the final product was polished and ready for launch. We couldn't be more pleased with the outcome.",
  },
  {
    name: "Marco Rossi",
    designation: "CTO, TechSolutions Italia",
    image: require("../assets/images/testimonial/6.webp"),
    review:
      "The hybrid app development service provided by Monk10x exceeded all our expectations. They created a seamless cross-platform solution that works flawlessly on both iOS and Android. Their attention to user experience and technical excellence is remarkable. The app has received excellent feedback from our clients across Europe.",
  },
  {
    name: "Vikram Singh",
    designation: "Founder, MediCare Plus",
    image: require("../assets/images/testimonial/3.jpg"),
    review:
      "Monk10x developed an AI-powered healthcare mobile app that revolutionized our patient management system. Their expertise in mobile development and understanding of healthcare workflows helped us create an app that streamlines appointments and provides real-time health monitoring. The app has improved our patient satisfaction by 70%.",
  },
  {
    name: "Jennifer Williams",
    designation: "CEO, HealthTech Solutions",
    image: require("../assets/images/testimonial/5.webp"),
    review:
      "The Flutter app development service from Monk10x was exceptional. They built a cross-platform healthcare app that serves thousands of users daily. The app's performance is outstanding, and the UI/UX design is intuitive and user-friendly. Our patient engagement has increased by 60% since the app launch.",
  },
  {
    name: "Alex Thompson",
    designation: "Co-founder, ShopEasy",
    image: require("../assets/images/testimonial/7.webp"),
    review:
      "Monk10x developed our e-commerce mobile app that has transformed our retail business. The iOS and Android apps they created are fast, secure, and feature-rich. The seamless shopping experience and integrated payment system have led to a 50% increase in mobile sales. Their ongoing support has been excellent.",
  },
];

// Combined testimonials for backward compatibility
export const testimonials = [...webTestimonials, ...appTestimonials];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: webIcon1,
    desc: "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: webIcon2,
    desc: "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: webIcon3,
    desc: " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand's message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: webIcon4,
    desc: "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: appIcon1,
    desc: "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: appIcon2,
    desc: "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: appIcon3,
    desc: "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: appIcon4,
    desc: "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 2,
    img: require("../assets/images/portfolio/web-development/cold-creekcap.webp"),
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 3,
    img: require("../assets/images/portfolio/web-development/think-reality.webp"),
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 4,
    img: require("../assets/images/portfolio/web-development/akash-mega-mart.webp"),
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 5,
    img: require("../assets/images/portfolio/web-development/midwam.webp"),
    title: "Midwam – Immersive Experience Design Company",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("../assets/images/portfolio/app-development/akash_mega_mart-app.webp"),
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: require("../assets/images/portfolio/app-development/feelit_app.webp"),
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: require("../assets/images/portfolio/app-development/klikomics.webp"),
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: require("../assets/images/portfolio/app-development/autosnap-app.webp"),
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 5,
    img: require("../assets/images/portfolio/app-development/rentop.webp"),
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

// complete service and details
export const services = [
  {
    id: 1,
    title: "AI Development",
    icon: icon1,
    desc: "Transform your business with Monk10x's tailored AI development solutions. From automating processes to delivering actionable insights, we help you innovate, scale, and stay ahead in a dynamic digital world.",
    detailsPage: {
      banner: require("../assets/images/banners/ai-development.webp"),
      img1: require("../assets/images/service-details/ai-1.jpeg"),
      img2: require("../assets/images/service-details/ai-2.webp"),
      img3: require("../assets/images/service-details/ai-3.jpeg"),
      firstSection: `
        <div class="space-y-6">
   <div class="space-y-4">
    <h2 class="text-xl font-bold">
      Revolutionizing Business with AI
    </h2>
    <p class="">
      In today's competitive landscape, Artificial Intelligence (AI) has become a transformative force, empowering businesses to streamline operations, enhance customer engagement, and make data-driven decisions.
    </p>
    <p class="">
      At <span class="font-bold text-secondary">Monk10x</span>, we specialize in crafting tailored AI solutions that enable organizations to unlock the full potential of AI and stay ahead of the curve.
    </p>
   </div>
  </div>`,

      secondSection: `
  <div class="py-6">
  <div class="space-y-6">
    <h2 class="text-xl font-bold">
      Why Choose AI for Your Business?
    </h2>
    <ul class="space-y-5 list-decimal pl-6">
      <li>
        <h3 class="font-bold mb-2">Enhanced Efficiency</h3>
        <p class="">
          Automate repetitive tasks and optimize workflows to boost productivity and free your team for strategic initiatives.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Data-Driven Decisions</h3>
        <p class="">
          Leverage the power of AI to process vast amounts of data, uncover actionable insights, and make precise, informed decisions.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Personalized Customer Experiences</h3>
        <p class="">
          Delight your customers with AI-powered tools like chatbots and recommendation systems, delivering tailored experiences that foster loyalty.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Cost Optimization</h3>
        <p class="">
          Save on operational costs with AI-driven solutions such as predictive maintenance, inventory management, and process automation.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Innovation and Scalability</h3>
        <p class="">
          Open the door to new opportunities and ensure your business adapts seamlessly as markets evolve.
        </p>
      </li>
    </ul>
  </div>
</div>
`,
      thirdSection: `<div class="py-6">
  <div class="space-y-6">
    <h2 class="text-xl font-bold">
      Our Expertise in AI Development
    </h2>
    <p>
      At Monk10x, we understand that every business is unique. That's why we offer customized AI solutions designed to meet your specific needs and goals.
    </p>
    <ul class="space-y-5 list-disc pl-6">
      <li>
        <h3 class="font-bold mb-2">Machine Learning Models</h3>
        <p>
          Build intelligent systems that continuously learn and improve from your data.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Natural Language Processing (NLP)</h3>
        <p>
          Create tools that understand and respond to human language, enhancing communication and efficiency.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Computer Vision</h3>
        <p>
          Harness AI to analyze and interpret visual data for applications in healthcare, security, retail, and more.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Predictive Analytics</h3>
        <p>
          Anticipate trends and outcomes with data-driven forecasting tools.
        </p>
      </li>
    </ul>
  </div>
</div>
`,
    },
  },
  {
    id: 2,
    title: "AI Calling Agency",
    icon: icon2,
    desc: "Revolutionize your customer outreach with our AI Calling Agency services. Our advanced AI voice technology enables personalized, scalable, and efficient communication with your audience.",
    detailsPage: {
      banner: require("../assets/images/banners/ai-calling-agency.webp"),
      img1: require("../assets/images/service-details/ai-calling-agency2.webp"),
      img2: require("../assets/images/service-details/ai-calling-agency1.webp"),
      img3: require("../assets/images/service-details/ai-calling-agency3.webp"),
      firstSection: `<div class="space-y-6">
  <div class="space-y-4">
    <h2 class="text-xl font-bold">
      Transform Your Customer Engagement with AI Calling
    </h2>
    <p>
      In today's fast-paced business environment, connecting with customers efficiently and personally is more important than ever.
    </p>
    <p>
      At <span class="font-bold text-secondary">Monk10x</span>, we leverage cutting-edge AI voice technology to create natural, engaging, and effective calling solutions that scale with your business needs.
    </p>
  </div>
</div>
`,
      secondSection: `<div class="py-6">
  <div class="space-y-6">
    <h2 class="text-xl font-bold">
      Why Choose Monk10x for AI Calling Services?
    </h2>
    <ul class="space-y-5 list-decimal pl-6">
      <li>
        <h3 class="font-bold mb-2">Human-Like Interactions</h3>
        <p>
          Our AI calling technology delivers natural-sounding conversations that customers respond to positively, creating meaningful engagement.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Scalable Outreach</h3>
        <p>
          Reach thousands of customers simultaneously without compromising on quality or personalization.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Data-Driven Optimization</h3>
        <p>
          Continuously improve your calling campaigns with detailed analytics and insights from every interaction.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Cost-Effective Solution</h3>
        <p>
          Significantly reduce operational costs while increasing the reach and effectiveness of your customer communication.
        </p>
      </li>
    </ul>
  </div>
</div>
`,

      thirdSection: `<div class="py-6">
  <div class="space-y-6">
    <h2 class="text-xl font-bold">
      Our AI Calling Services
    </h2>
    <ul class="space-y-5 list-decimal pl-6">
      <li>
        <h3 class="font-bold mb-2">Lead Generation</h3>
        <p>
          Identify and qualify potential customers through intelligent conversations that adapt to responses.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Appointment Scheduling</h3>
        <p>
          Automate booking processes with AI that handles scheduling, confirmations, and reminders.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Customer Feedback</h3>
        <p>
          Gather valuable insights through personalized follow-up calls that encourage honest feedback.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Event Promotions</h3>
        <p>
          Boost attendance with targeted calling campaigns that generate excitement and provide information.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Service Announcements</h3>
        <p>
          Keep customers informed about new offerings, updates, or changes to your services.
        </p>
      </li>
    </ul>
  </div>
</div>
`,
    },
  },
  {
    id: 3,
    title: "Web Development",
    icon: icon3,
    desc: "Elevate your online presence with Monk10x's cutting-edge web development services. We craft responsive, user-centric websites that drive engagement, enhance functionality, and fuel business growth.",
    detailsPage: {
      banner: require("../assets/images/banners/web-development.webp"),
      img1: require("../assets/images/service-details/web-dev-1.webp"),
      img2: require("../assets/images/service-details/web-dev-2.webp"),
      img3: require("../assets/images/service-details/web-dev-3.webp"),
      firstSection: `<div class="space-y-6">
        <div class="space-y-4">
          <h2 class="text-xl font-bold">
            Building Exceptional Websites for Your Business
          </h2>
          <p>
            In today's digital-first world, a well-crafted website is essential for connecting with your audience and driving business success.
          </p>
          <p>
            At <span class="font-bold text-secondary">Monk10x</span>, we specialize in creating custom, responsive websites that deliver a seamless user experience, enhance functionality, and fuel your growth.
          </p>
        </div>
      </div>
      `,
      secondSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Why Choose Monk10x for Web Development?
          </h2>
          <ul class="space-y-5 list-decimal pl-6">
            <li>
              <h3 class="font-bold mb-2">Tailored Solutions</h3>
              <p>
                Every business has unique needs. We design websites that align with your goals, ensuring a personalized approach that sets you apart from the competition.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">User-Centric Design</h3>
              <p>
                Our focus is on creating intuitive and visually compelling websites that engage visitors and turn them into loyal customers.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Responsive & Scalable</h3>
              <p>
                With mobile traffic on the rise, we ensure your website performs flawlessly on any device, scaling to grow with your business.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">SEO-Optimized</h3>
              <p>
                A beautiful website is only effective if people can find it. Our development process integrates SEO best practices to help your site rank higher on search engines and reach your target audience.
              </p>
            </li>
          </ul>
        </div>
      </div>
      `,
      thirdSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Our Web Development Process
          </h2>
          <ul class="space-y-5 list-decimal pl-6">
            <li>
              <h3 class="font-bold mb-2">Consultation</h3>
              <p>
                We begin by understanding your business, objectives, and vision.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Planning</h3>
              <p>
                We create a roadmap and select the best technologies to bring your ideas to life.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Design & Development</h3>
              <p>
                Our skilled developers build a high-performance website with seamless functionality.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Testing</h3>
              <p>
                We rigorously test to ensure your website is bug-free and user-friendly.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Launch & Support</h3>
              <p>
                After launch, we provide continuous support to keep your website running smoothly and up-to-date.
              </p>
            </li>
          </ul>
        </div>
      </div>
      `,
    },
  },
  {
    id: 4,
    title: "App Development",
    icon: icon4,
    desc: "Take your business to the next level with Monk10x's innovative app development services. We design and develop mobile applications that deliver seamless experiences, enhance user engagement, and drive growth.",
    detailsPage: {
      banner: require("../assets/images/banners/app-development.webp"),
      img1: require("../assets/images/service-details/app-dev-1.webp"),
      img2: require("../assets/images/service-details/software-dev-2.webp"),
      img3: require("../assets/images/service-details/app-dev-2.webp"),
      firstSection: `<div class="space-y-6">
        <div class="space-y-4">
          <h2 class="text-xl font-bold">
            Creating Impactful Mobile Apps for Your Business
          </h2>
          <p>
            In the mobile-first world, having an app that resonates with your audience is crucial for business success.
          </p>
          <p>
            At <span class="font-bold text-secondary">Monk10x</span>, we specialize in developing high-quality mobile applications that provide an exceptional user experience, enhance functionality, and grow your business.
          </p>
        </div>
      </div>`,
      secondSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Why Choose Monk10x for App Development?
          </h2>
          <ul class="space-y-5 list-decimal pl-6">
            <li>
              <h3 class="font-bold mb-2">Custom Solutions</h3>
              <p>
                We understand that each business is unique, and we create tailor-made apps that align with your business objectives.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Cross-Platform Compatibility</h3>
              <p>
                Our apps are designed to perform seamlessly across multiple platforms, ensuring a consistent experience for all users.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">User-Centered Design</h3>
              <p>
                We focus on intuitive design and user engagement, ensuring your app offers a delightful experience for users.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Scalability & Security</h3>
              <p>
                Our apps are built to scale with your business and are secured with the latest technologies to protect your data.
              </p>
            </li>
          </ul>
        </div>
      </div>`,
      thirdSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Our App Development Process
          </h2>
          <ul class="space-y-5 list-decimal pl-6">
            <li>
              <h3 class="font-bold mb-2">Consultation</h3>
              <p>
                We start by understanding your business goals and the vision for your app.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Planning</h3>
              <p>
                We outline the features and functionalities, and select the best approach for development.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Design & Development</h3>
              <p>
                Our team develops a robust and scalable app with an exceptional user interface.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Testing</h3>
              <p>
                We ensure that the app is bug-free, reliable, and performs optimally across all devices.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Launch & Support</h3>
              <p>
                Once launched, we provide ongoing support and maintenance to ensure your app remains up-to-date and functional.
              </p>
            </li>
          </ul>
        </div>
      </div>`,
    },
  },
  {
    id: 5,
    title: "Chatbot Development",
    icon: icon5,
    desc: "Enhance customer engagement with Monk10x's intelligent chatbot solutions. Our custom chatbots provide instant support, streamline interactions, and deliver personalized experiences across all your digital channels.",
    detailsPage: {
      banner: require("../assets/images/banners/chatbot.webp"),
      img1: require("../assets/images/service-details/chatbot-1.webp"),
      img2: require("../assets/images/service-details/chatbot-2.webp"),
      img3: require("../assets/images/service-details/chatbot-3.webp"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Revolutionize Customer Interactions with Intelligent Chatbots
            </h2>
            <p>
              In today's digital-first world, customers expect immediate responses and personalized service. Our chatbot solutions help businesses meet these expectations while optimizing resources.
            </p>
            <p>
              At <span class="font-bold text-secondary">Monk10x</span>, we develop sophisticated, AI-powered chatbots that understand natural language, learn from interactions, and provide valuable assistance to your customers around the clock.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Choose Monk10x for Chatbot Development?
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Intelligent Conversations</h3>
                <p>
                  Our chatbots leverage advanced NLP to understand context, intent, and sentiment, creating natural and helpful interactions.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Seamless Integration</h3>
                <p>
                  We design chatbots that integrate effortlessly with your existing systems, websites, and social media platforms.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Continuous Learning</h3>
                <p>
                  Our AI-powered chatbots improve over time, learning from each interaction to provide increasingly accurate and helpful responses.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Customized Solutions</h3>
                <p>
                  We tailor each chatbot to your specific business needs, brand voice, and customer expectations.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Analytics & Insights</h3>
                <p>
                  Gain valuable customer insights through comprehensive analytics that help you understand needs and improve service.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Chatbot Development Services
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Customer Support Chatbots</h3>
                <p>
                  Provide instant answers to common questions, troubleshoot issues, and escalate complex matters to human agents when necessary.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">E-commerce Assistants</h3>
                <p>
                  Guide customers through product selection, provide recommendations, and facilitate purchases with conversational interfaces.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Lead Generation Bots</h3>
                <p>
                  Engage website visitors, qualify leads, and collect contact information through natural conversations.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Internal Process Automation</h3>
                <p>
                  Streamline internal workflows with chatbots that handle HR inquiries, IT support, and other routine organizational tasks.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 6,
    title: "UI/UX Design",
    icon: icon6,
    desc: "Create exceptional digital experiences with Monk10x's UI/UX design services. We craft intuitive, visually stunning interfaces that delight users, enhance engagement, and drive conversion rates for your business.",
    detailsPage: {
      banner: require("../assets/images/banners/uiux.webp"),
      img1: require("../assets/images/service-details/uiux-1.webp"),
      img2: require("../assets/images/service-details/uiux-2.webp"),
      img3: require("../assets/images/service-details/uiux-3.webp"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Crafting Exceptional User Experiences
            </h2>
            <p>
              In today's competitive digital landscape, outstanding design is no longer optionalâ€”it's essential. Users expect intuitive, engaging, and visually appealing experiences across all digital touchpoints.
            </p>
            <p>
              At <span class="font-bold text-secondary">Monk10x</span>, we combine creativity with strategic thinking to design interfaces that not only look beautiful but also drive business results through enhanced user satisfaction and engagement.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Choose Monk10x for UI/UX Design?
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">User-Centered Approach</h3>
                <p>
                  We place users at the heart of our design process, creating experiences that resonate with their needs, preferences, and behaviors.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Research-Driven Design</h3>
                <p>
                  Our designs are informed by thorough research, user testing, and data analysis to ensure they deliver measurable results.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Brand Consistency</h3>
                <p>
                  We ensure your digital interfaces reflect and strengthen your brand identity across all platforms and touchpoints.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Conversion-Focused</h3>
                <p>
                  Our designs are strategically crafted to guide users toward desired actions, improving conversion rates and business outcomes.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Accessibility & Inclusivity</h3>
                <p>
                  We create designs that are accessible to all users, including those with disabilities, ensuring your digital products reach the widest possible audience.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our UI/UX Design Services
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">User Research & Analysis</h3>
                <p>
                  We conduct comprehensive research to understand your users' needs, behaviors, and pain points, creating detailed personas and journey maps.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Information Architecture</h3>
                <p>
                  We organize and structure your content and features in a logical, intuitive way that helps users find what they need quickly.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Wireframing & Prototyping</h3>
                <p>
                  We create interactive prototypes that allow you to test and refine the user experience before development begins.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Visual Design</h3>
                <p>
                  Our designers craft visually stunning interfaces that align with your brand and create emotional connections with users.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
];
