import node_backend from "../assets/portfolio/arrayDestruct.jpg";
import aaengineering from "../assets/portfolio/aa-engineering.png";
import invozoneHomepage from "../assets/portfolio/invozone-homepage.png";
import fileProcessor from "../assets/portfolio/file-processor.png";
import pods from "../assets/portfolio/pods.png";
import zeniva from "../assets/portfolio/zeniva-ai.png";
import cvBuilder from "../assets/portfolio/cv-builder.png";
import landingPageDesign from "../assets/portfolio/landing-page.png";
import youtubeClone from "../assets/portfolio/youtube-clone.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: pods,
      title: "Pods - Social Media Platform",
      description: "A full-stack social media application with 3D pods, events, real-time features, user authentication, and responsive design.",
      technologies: ["React","tailwind CSS", "Node.js", "Express", "Redis", "Socket.io", "PlayCanvas"],
      demo: "https://pods.social",
      category: "Full Stack Development"
    },
    {
      id: 2,
      src: zeniva,
      title: "Zeniva AI - Shopify Application",
      description: "A Shopify embedded application for enhanced e-commerce functionality and customer experience.",
      technologies: ["React", "tailwind CSS", "Shopify API", "Node.js", "Graphql"],
      demo: "https://apps.shopify.com/zeniva?search_id=f59a82c0-f13b-47d4-bc3c-533b120dd23b&surface_detail=zeniva&surface_inter_position=1&surface_intra_position=1&surface_type=search",
      category: "E-commerce Development"
    },
    {
      id: 3,
      src: cvBuilder,
      title: "Professional CV Builder",
      description: "Modern CV builder with multiple templates, real-time preview, and PDF export functionality (in development)",
      technologies: ["React", "Tailwind CSS", "CSS3", "PDF Generation"],
      demo: "https://beautiful-pie-ff1683.netlify.app",
      category: "Web Application"
    },
    {
      id: 4,
      src: aaengineering,
      title: "AA Engineering Portfolio",
      description: "Professional portfolio website for engineering services with modern design and responsive layout.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      demo: "https://hilarious-gingersnap-76123b.netlify.app/",
      category: "Client Project"
    },
    {
      id: 5,
      src: fileProcessor,
      title: "Advanced File Processor",
      description: "Web-based file processing tool with support for advance image editing in multiple formats, batch operations",
      technologies: ["Next.js", "Tailwind CSS"],
      demo: "https://advace-file-processor.netlify.app/",
      category: "Utility Application"
    },
    {
      id: 6,
      src: invozoneHomepage,
      title: "Invozone Homepage Clone",
      description: "A recreation of Invozone's homepage with responsive design for assessment purposes",
      technologies: ["React", "Tailwind CSS", "Responsive Design"],
      demo: "https://invozone-website-clone.netlify.app",
      category: "UI Development"
    },
    {
      id: 7,
      src: landingPageDesign,
      title: "Modern Landing Page",
      description: "Conversion-focused landing page with modern design principles and optimized user experience.",
      technologies: ["React", "Tailwind CSS" ],
      demo: "https://landing-page-with-tailwind.netlify.app",
      category: "Landing Page"
    },
    {
      id: 8,
      src: youtubeClone,
      title: "YouTube Interface Clone",
      description: "Recreation of YouTube's user interface with responsive design",
      technologies: ["HTML5", "CSS3"],
      demo: "https://amjad-afridi.github.io/Youtube-clone-HTML-CSS.github.io/",
      category: "UI Clone"
    }
  ];

  return (
    <section
      name="portfolio"
      className="w-full bg-gradient-to-b from-black to-gray-800 py-20"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover my latest projects showcasing expertise in full-stack development, 
            modern web technologies, and innovative solutions across various industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ id, src, title, description, technologies, demo, category }) => (
            <div
              key={id}
              className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {category}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="flex justify-center">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 group"
                  >
                    View Project
                    <svg 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;