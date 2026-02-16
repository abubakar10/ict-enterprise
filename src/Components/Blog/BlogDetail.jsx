import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DOMPurify from "dompurify";
import "./Blog.scss";
import "./BlogDetail.scss";

const BlogDetail = () => {
  const { slug } = useParams();

  const blogs = [
    {
      id: 1,
      slug: "future-of-cloud-computing-trends-innovations-2025",
      title: "The Future of Cloud Computing: Trends and Innovations in 2025",
      description: "Explore the latest trends in cloud computing, from serverless architectures to edge computing, and discover how businesses are leveraging cloud technology to drive innovation and scalability.",
      coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
      author: "ICT Solutions Team",
      date: "January 15, 2025",
      readingTime: 8,
      tags: ["cloud", "technology", "innovation", "trends"],
      content: `
        <h2>Introduction</h2>
        <p>Cloud computing has revolutionized the way businesses operate, offering unprecedented scalability, flexibility, and cost-efficiency. As we move through 2025, several key trends are shaping the future of cloud technology.</p>
        
        <h2>Serverless Architectures</h2>
        <p>Serverless computing continues to gain momentum, allowing developers to build and deploy applications without managing server infrastructure. This approach reduces operational overhead and enables faster time-to-market for new applications.</p>
        
        <h2>Edge Computing</h2>
        <p>Edge computing brings computation and data storage closer to the location where it's needed, reducing latency and improving performance for real-time applications. This is particularly important for IoT devices and applications requiring immediate response times.</p>
        
        <h2>Multi-Cloud Strategies</h2>
        <p>Many organizations are adopting multi-cloud strategies to avoid vendor lock-in, improve redundancy, and optimize costs. This approach allows businesses to leverage the best services from different cloud providers.</p>
        
        <h2>AI and Machine Learning Integration</h2>
        <p>Cloud platforms are increasingly integrating AI and ML capabilities, making it easier for businesses to implement intelligent solutions without extensive expertise in data science.</p>
        
        <h2>Conclusion</h2>
        <p>The cloud computing landscape is evolving rapidly, with new technologies and approaches emerging regularly. Businesses that stay ahead of these trends will be better positioned to leverage cloud technology for competitive advantage.</p>
      `
    },
    {
      id: 2,
      slug: "cybersecurity-best-practices-modern-enterprises",
      title: "Cybersecurity Best Practices for Modern Enterprises",
      description: "Learn essential cybersecurity strategies to protect your organization from evolving threats, including zero-trust architecture, employee training, and proactive threat detection.",
      coverImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop",
      author: "ICT Solutions Team",
      date: "January 20, 2025",
      readingTime: 10,
      tags: ["cybersecurity", "security", "enterprise", "best-practices"],
      content: `
        <h2>Introduction</h2>
        <p>In today's digital landscape, cybersecurity is more critical than ever. Organizations face an increasing number of sophisticated threats that can compromise sensitive data and disrupt operations.</p>
        
        <h2>Zero-Trust Architecture</h2>
        <p>Zero-trust security models assume that no user or device should be trusted by default, regardless of their location. This approach requires continuous verification and authentication, significantly reducing the attack surface.</p>
        
        <h2>Employee Training and Awareness</h2>
        <p>Human error remains one of the leading causes of security breaches. Regular training programs help employees recognize phishing attempts, use strong passwords, and follow security best practices.</p>
        
        <h2>Proactive Threat Detection</h2>
        <p>Implementing advanced threat detection systems that use AI and machine learning can help identify suspicious activities before they result in a breach. These systems analyze patterns and behaviors to detect anomalies.</p>
        
        <h2>Regular Security Audits</h2>
        <p>Conducting regular security audits helps identify vulnerabilities and ensure compliance with industry standards. These audits should include penetration testing, vulnerability assessments, and policy reviews.</p>
        
        <h2>Incident Response Planning</h2>
        <p>Having a well-defined incident response plan ensures that organizations can quickly contain and mitigate security breaches. This plan should include clear procedures, communication protocols, and recovery strategies.</p>
        
        <h2>Conclusion</h2>
        <p>Effective cybersecurity requires a multi-layered approach that combines technology, processes, and people. By implementing these best practices, organizations can significantly improve their security posture.</p>
      `
    },
    {
      id: 3,
      slug: "digital-transformation-it-services-drive-business-growth",
      title: "Digital Transformation: How IT Services Drive Business Growth",
      description: "Discover how strategic IT services can transform your business operations, improve efficiency, and drive sustainable growth in the digital age.",
      coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
      author: "ICT Solutions Team",
      date: "January 25, 2025",
      readingTime: 7,
      tags: ["digital-transformation", "it-services", "business-growth", "technology"],
      content: `
        <h2>Introduction</h2>
        <p>Digital transformation is no longer optional—it's essential for businesses that want to remain competitive in today's market. Strategic IT services play a crucial role in enabling this transformation.</p>
        
        <h2>Streamlining Operations</h2>
        <p>Modern IT services help businesses automate routine tasks, reduce manual errors, and improve operational efficiency. This allows employees to focus on strategic initiatives that drive value.</p>
        
        <h2>Enhanced Customer Experience</h2>
        <p>Technology enables businesses to deliver personalized experiences, respond to customer needs faster, and provide seamless interactions across multiple channels. This leads to increased customer satisfaction and loyalty.</p>
        
        <h2>Data-Driven Decision Making</h2>
        <p>IT services provide businesses with tools to collect, analyze, and leverage data for informed decision-making. This data-driven approach helps identify opportunities, optimize processes, and predict trends.</p>
        
        <h2>Scalability and Flexibility</h2>
        <p>Cloud-based IT services offer businesses the ability to scale resources up or down based on demand. This flexibility is crucial for businesses experiencing growth or seasonal fluctuations.</p>
        
        <h2>Innovation and Competitive Advantage</h2>
        <p>Leveraging cutting-edge IT services enables businesses to innovate faster, bring new products to market quickly, and gain a competitive edge in their industry.</p>
        
        <h2>Cost Optimization</h2>
        <p>Strategic IT investments can reduce operational costs through automation, improved efficiency, and optimized resource utilization. This frees up capital for growth initiatives.</p>
        
        <h2>Conclusion</h2>
        <p>Digital transformation through strategic IT services is essential for business growth. Organizations that embrace these technologies will be better positioned to adapt, innovate, and succeed in the digital economy.</p>
      `
    }
  ];

  const blog = blogs.find(b => b.slug === slug);

  // Update document title and meta tags for SEO
  useEffect(() => {
    if (blog) {
      document.title = `${blog.title} | ICT Enterprise Solutions`;
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', blog.description);

      // Update Open Graph tags
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', blog.title);

      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      ogDescription.setAttribute('content', blog.description);

      let ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
      }
      ogImage.setAttribute('content', blog.coverImage);

      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (!ogUrl) {
        ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrl);
      }
      ogUrl.setAttribute('content', window.location.href);

      // Add structured data (JSON-LD) for better SEO
      let existingScript = document.querySelector('script[type="application/ld+json"][data-blog-schema]');
      if (existingScript) {
        existingScript.remove();
      }

      const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.description,
        "image": blog.coverImage,
        "author": {
          "@type": "Organization",
          "name": blog.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "ICT Enterprise Solutions",
          "logo": {
            "@type": "ImageObject",
            "url": window.location.origin + "/logo.png"
          }
        },
        "datePublished": blog.date,
        "dateModified": blog.date,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": window.location.href
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-blog-schema', 'true');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      const script = document.querySelector('script[type="application/ld+json"][data-blog-schema]');
      if (script) {
        script.remove();
      }
    };
  }, [blog, slug]);

  if (!blog) {
    return (
      <div className="blog-detail">
        <div className="not-found">
          <h1>Blog Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="back-btn">Back to Blogs</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail">
      {blog.coverImage && (
        <div className="detail-cover">
          <img src={blog.coverImage} alt={blog.title} />
        </div>
      )}
      
      <div className="detail-content">
        <h1>{blog.title}</h1>
        
        <div className="detail-meta">
          <span className="author">Author: {blog.author}</span>
          <span className="separator">•</span>
          <span className="date">{blog.date}</span>
          <span className="separator">•</span>
          <span className="reading-time">{blog.readingTime} min read</span>
        </div>

        <div className="detail-tags">
          {blog.tags.map(tag => (
            <span key={tag} className="tag">#{tag}</span>
          ))}
        </div>

      <div
        className="blog-body"
        dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(blog.content),
          }}
        />

        <div className="detail-footer">
          <Link to="/blog" className="back-btn">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

