"use client";
import React from "react";
import CommentSection from "@/components/CommentSection";
import AuthorCard from "@/components/AuthorCard";
// import { title } from "process";
import Footer from "@/components/Footer";
const posts = [
  
          {
           id: '1',
           title:"Traveling: A Gateway to Exploration and Growth",
           description: "Traveling is a rewarding experience that broadens horizons, enriches the soul, and creates lifelong memories. It allows individuals to explore diverse cultures, taste unique cuisines, and connect with people from different backgrounds. Whether it’s a serene beach getaway, a bustling city adventure, or a trek through majestic mountains, traveling provides an escape from routine and offers fresh perspectives on life. It encourages personal growth by challenging comfort zones and fostering adaptability. Along the journey, travelers often gain a deeper appreciation for the world's natural beauty and historical wonders. Sustainable and mindful travel practices are increasingly important to protect these treasures for future generations. From solo trips to group adventures, traveling nurtures curiosity, strengthens relationships, and inspires creativity. Ultimately, it’s not just about the destination but the journey itself, as each experience contributes to personal stories and a greater understanding of the world.",
           image:"../images/travel1.png",
          },
  
          {
          id: '2',
          title:"Personal Development",
          description: "personal development lies in understanding oneself, identifying areas for growth, and actively working towards becoming the best version of oneself.Key components of personal development include self-awareness, which helps individuals recognize their strengths, weaknesses, and values, and goal setting, which provides direction and motivation. Time management and productivity techniques, such as prioritization and effective planning, play a vital role in achieving these goals. Building resilience, maintaining a growth mindset, and embracing lifelong learning are essential for navigating challenges and adapting to change.Engaging in personal development fosters confidence, clarity, and a sense of purpose. It not only enhances professional opportunities but also improves relationships and overall well-being. Simple practices like journaling, meditation, or seeking mentorship can significantly contribute to personal growth.",
          date:"2024-12-30",
           image: "../images/personal.png",
          },
          //  },
  
             {
              id: '3',
              title:"solo travel",
              description: "Solo travel is a rewarding experience that allows individuals to explore the world on their own terms. It offers freedom, self-discovery, and the opportunity to step out of one’s comfort zone. Traveling solo enables you to create your own itinerary, make spontaneous decisions, and focus entirely on your interests. It fosters personal growth, independence, and confidence as you navigate unfamiliar places and situations. Solo travel also opens doors to meeting new people and engaging in unique cultural exchanges, often leading to lifelong connections.However, it requires careful planning to ensure safety and maximize enjoyment. Researching destinations, staying connected with loved ones, and being mindful of local customs are essential. While some may feel lonely at times, solo travel encourages introspection and provides a chance to reconnect with oneself. Whether seeking adventure or tranquility, traveling alone can be a transformative and empowering journey.",
              date:"2024-12-30",
              image:"../images/solo-travel.jpg",
             },
  
             {
              id: '4',
              title:"Virtual reality ",
              description: "Virtual reality (VR) is an immersive technology that simulates real or imagined environments, enabling users to interact with 3D spaces through devices like VR headsets, controllers, and sensors. By creating lifelike experiences, VR is revolutionizing industries such as gaming, education, healthcare, and entertainment. In gaming, VR transports players into dynamic virtual worlds, offering unparalleled interactivity. In education, it enhances learning by providing virtual field trips and hands-on simulations. Healthcare professionals use VR for surgical training, therapy, and pain management.This technology also enables remote collaboration and virtual meetings, reshaping workplace communication. Despite its potential, VR faces challenges like high costs, motion sickness, and the need for advanced hardware. As the technology evolves, VR is becoming more accessible and sophisticated, blending seamlessly with augmented reality (AR) and artificial intelligence (AI). VR's potential to transform how we learn, work, and play makes it a cornerstone of the digital future.",
              date:"2024-12-30",
              image:"../images/virtual.jpg",
             },
  
             {
              id: '5',
              title:" Language acquisition",
              description: "Language acquisition is the process by which humans learn to understand, produce, and use language to communicate. It begins early in life, with infants gradually developing the ability to recognize sounds, form words, and construct sentences. This process is influenced by biological, cognitive, and social factors.Theories of language acquisition include Noam Chomsky's idea of an innate language acquisition device that equips humans with the ability to learn language, and the interactionist perspective, which emphasizes the role of social interaction and environmental exposure.Language acquisition occurs in stages, starting with cooing and babbling in infancy, progressing to word formation, and eventually complex sentence construction in childhood. Critical periods, especially early childhood, are key for effective language learning.For adults, acquiring a new language often involves more explicit instruction and practice. Understanding how language acquisition works informs teaching methods, therapy for speech disorders, and multilingual education.",
              date:"2024-12-30",
              image: "../images/language.jpg",
             },
  
             {
              id: '6',
              title:"Parenting and Family Life",
              description: "Parenting and family life are central to building strong, supportive relationships and creating a nurturing environment for personal growth. Effective parenting involves guiding children with love, patience, and understanding, helping them develop confidence, resilience, and moral values. Open communication and active listening strengthen family bonds and foster trust among members.Balancing work, parenting, and personal life can be challenging, but setting priorities and practicing self-care ensures a harmonious family dynamic. Shared activities like meals, outings, or game nights promote connection and create lasting memories.Teaching by example plays a vital role in shaping children’s behavior, encouraging them to adopt positive habits and attitudes. Parenting is a journey of learning, filled with moments of joy, challenges, and growth for both parents and children. A healthy family life lays the foundation for emotional well-being, instilling a sense of belonging and security for all members.",
              date:"2024-12-30",
              image:"../images/parenting.png",
             },
  
             {
              id: '7',
              title:" Education and Skills",
              description: "Education and skills are the cornerstones of personal and professional growth, empowering individuals to achieve their goals and adapt to a dynamic world. Education fosters critical thinking, problem-solving, and creativity, providing the knowledge needed to navigate various life challenges. Skills, on the other hand, translate this knowledge into practical abilities, enabling individuals to excel in specific areas.In today’s fast-paced environment, both formal education and self-directed learning are essential. Technical skills like coding, data analysis, and digital marketing are in high demand, while soft skills such as communication, adaptability, and leadership are equally crucial for success.Continuous learning and upskilling ensure relevance in an ever-changing job market. Online courses, workshops, and mentorship programs offer accessible ways to acquire new skills and knowledge. Ultimately, education and skill development empower individuals to unlock their potential, contribute meaningfully to society, and shape a brighter future.",
              date:"2024-12-30",
              image: "../images/education.png",
             },
             {
              id: '8',
              title:"Book Reviews and Recommendations: Inspiring Reads for Every Taste",
              description: "Book reviews and recommendations connect readers with captivating stories, insightful ideas, and valuable knowledge across genres. Reviews offer a glimpse into a book’s themes, characters, and writing style, helping readers decide if it suits their interests. Whether it’s fiction, non-fiction, fantasy, or self-help, every book offers a unique experience.Personal recommendations bring hidden gems to light, from classic literature to contemporary works. They guide readers to discover books that inspire, entertain, or educate. Curated lists like “must-reads for personal growth” or “thrillers to keep you on edge” cater to diverse preferences.Sharing honest opinions and engaging discussions builds a community of readers who exchange insights and perspectives. Book reviews not only encourage a love for reading but also deepen understanding of the world. Whether for leisure or learning, exploring new books opens doors to endless adventures and opportunities for growth.",
              date:"2024-12-30",
              image:"../images/book.png",
             },
  
             {
              id: '9',
              title:"AI and Agentic Tools: Empowering Innovation and Productivity",
              description: "Artificial Intelligence (AI) and agentic tools are transforming industries by automating tasks, improving efficiency, and enabling innovative solutions. AI-powered tools, such as chatbots, virtual assistants, and machine learning models, help businesses streamline operations, enhance customer experience, and analyze vast amounts of data for strategic insights.Agentic tools, which are designed to act independently within defined parameters, amplify human capabilities by taking on repetitive or complex tasks. Examples include AI-driven content creation tools, recommendation engines, and predictive analytics systems that adapt to user needs.These technologies empower individuals and organizations to solve problems more effectively and unlock new possibilities. For example, creators use AI tools for generating designs, writing, or video editing, while businesses employ them for forecasting and decision-making.By integrating AI and agentic tools, users can save time, reduce costs, and focus on creativity and innovation, shaping a smarter and more productive future.",
              date:"2024-12-30",
              image:"../images/ai-agentic.jpg",
             },
  
             {
              id: '10',
              title:"Health and Fitness: A Path to Wellness",
              description: "Health and fitness are essential for a balanced and fulfilling life, focusing on physical, mental, and emotional well-being. Regular exercise, such as walking, yoga, or strength training, improves cardiovascular health, boosts energy levels, and enhances overall physical fitness. Balanced nutrition, including a diet rich in whole foods, vitamins, and minerals, plays a critical role in maintaining a healthy body and mind.Fitness is not just about physical appearance but also about building resilience, reducing stress, and preventing chronic diseases. Activities like meditation and mindfulness foster mental clarity and emotional stability, contributing to a holistic approach to wellness.Consistency and small, achievable goals are key to sustainable health and fitness routines. Whether it’s joining a fitness class, exploring outdoor activities, or adopting healthier eating habits, taking proactive steps improves quality of life. Ultimately, investing in health is investing in happiness and longevity.",
              date:"2024-12-30",
              image:"../images/health.jpg",
             },
  
             {
              id: '11',
              title:"Tech and Gadgets",
              description: "Tech and gadgets are at the forefront of modern innovation, transforming how we live, work, and connect with the world. From smartphones and smartwatches to AI-powered devices and VR headsets, technology continues to revolutionize everyday life. Gadgets are not just tools; they are enablers of efficiency, convenience, and creativity.The rapid evolution of technology brings cutting-edge advancements like 5G, IoT (Internet of Things), and wearable tech, enhancing connectivity and user experience. These devices simplify tasks, provide entertainment, and even monitor health, bridging the gap between humans and machines.Staying informed about the latest tech trends helps individuals and businesses leverage innovations for productivity and growth. Reviews, comparisons, and usage tips empower consumers to make informed decisions while exploring the vast tech landscape.In a world driven by digital transformation, gadgets symbolize progress, shaping the future and enriching lives in unprecedented ways.",
              date:"2024-12-30",
              image:"../images/tech-gadget.png",
             },
  
             {
              id: '12',
              title:"Fashion and Beauty: Expressions of Style and Confidence",
              description: "Fashion and beauty are dynamic forms of self-expression that reflect individuality, culture, and creativity. Fashion evolves with trends, offering endless possibilities to experiment with colors, patterns, and styles. From timeless classics to bold innovations, clothing choices enable individuals to showcase their unique personalities and adapt to various occasions.Beauty complements fashion, enhancing natural features through skincare, makeup, and grooming routines. A focus on self-care promotes not only physical appearance but also inner confidence and well-being. Sustainable fashion and beauty practices are gaining momentum, encouraging eco-friendly choices and ethical production.Staying updated with trends, exploring DIY techniques, and investing in quality products help individuals craft their personal style. Fashion and beauty are more than aesthetics; they empower people to feel confident, creative, and comfortable in their own skin, making them an integral part of modern self-expression and identity.",
              date:"2024-12-30",
              image:"../images/beauty.png",
             }
            
];
export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };
  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
        {" "}
        {post.title}
      </h1>

      {post.image && (
        <img
        src={post.image}
        alt={post.title}
        className="w-full h-auto rounded-md mt-4"/>
      )}
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}

      </div>
      <CommentSection postId={post.id} />
      <AuthorCard />
      <Footer/>
    </div>
  );
}
