'use client';

import { useState } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Link from 'next/link';

export default function About() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(25px)',
    WebkitBackdropFilter: 'blur(25px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderTop: '1px solid rgba(255, 255, 255, 0.3)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    position: 'relative' as const,
  };

  const teamMembers = [
    {
      name: "Dr. Noodleton McBrainwave",
      role: "Chief Eggshell Orchestrator",
      bio: "Former circus performer turned quantum computing evangelist. Specializes in balancing eggs on quantum processors while debugging interdimensional code.",
      color: "#8b5cf6",
      emoji: "🥚",
      funFact: "Once trained a quantum computer to juggle"
    },
    {
      name: "Professor Giggles von Sparklebottom",
      role: "Director of Pancake Engineering",
      bio: "MIT dropout who discovered that the perfect pancake algorithm could revolutionize gaming physics. Now applies syrup dynamics to liquid glass interfaces.",
      color: "#f59e0b",
      emoji: "🥞",
      funFact: "Holds 47 patents for edible user interfaces"
    },
    {
      name: "Captain Whiskers McFluffington",
      role: "Senior Bubble Architect",
      bio: "Former soap bubble scientist who realized that bubble physics are the key to immersive gaming. Designs floating UI elements that pop with satisfaction.",
      color: "#06ffa5",
      emoji: "🫧",
      funFact: "Can blow bubbles in 23 different programming languages"
    },
    {
      name: "Sir Banana von Hammerpants",
      role: "Chief Taco Optimization Officer",
      bio: "Recognized globally for optimizing taco-folding algorithms. Applies crispy shell engineering principles to game architecture and user engagement metrics.",
      color: "#ef4444",
      emoji: "🌮",
      funFact: "Once debugged code using only hot sauce patterns"
    },
    {
      name: "Princess Donutella Sprinklebuns",
      role: "VP of Cosmic Jellybeans",
      bio: "Quantum physicist turned confectionery consultant. Believes that the universe is made of jellybeans and applies this theory to multiverse gaming mechanics.",
      color: "#10b981",
      emoji: "🍩",
      funFact: "Discovered the 11th dimension while arranging sprinkles"
    },
    {
      name: "Admiral Sockington the Magnificent",
      role: "Director of Sock Puppet Relations",
      bio: "Former diplomat who specialized in inter-sock negotiations. Now manages our AI personality development using advanced puppet psychology methodologies.",
      color: "#f97316",
      emoji: "🧦",
      funFact: "Speaks fluent Cotton and Polyester"
    }
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: #000000;
          color: white;
          overflow-x: hidden;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }

        .text-gradient {
          background: linear-gradient(135deg, #00d4ff, #b347d9, #ff006e);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
        }

        .glass-button {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 50px;
          padding: 16px 32px;
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-block;
        }

        .glass-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(31, 38, 135, 0.4);
        }
      `}</style>

      <AnimatedBackground />

      <main style={{ 
        position: 'relative', 
        zIndex: 10, 
        minHeight: '100vh',
        padding: '2rem'
      }}>
        {/* Navigation */}
        <nav style={{ 
          position: 'fixed', 
          top: '2rem', 
          left: '2rem', 
          zIndex: 100 
        }}>
          <Link href="/" className="glass-button">
            ← Back to Home
          </Link>
        </nav>

        {/* Header */}
        <section style={{
          textAlign: 'center',
          padding: '8rem 2rem 4rem 2rem'
        }}>
          <h1 
            className="text-gradient fade-in-up"
            style={{
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: 'bold',
              marginBottom: '2rem',
              animationDelay: '0.2s',
              opacity: 0
            }}
          >
            Meet Our Ridiculous Team
          </h1>
          <p 
            className="fade-in-up"
            style={{
              fontSize: '1.5rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '800px',
              margin: '0 auto',
              animationDelay: '0.4s',
              opacity: 0
            }}
          >
            The brilliant minds behind the most absurdly advanced Tic-Tac-Toe experience ever conceived. 
            Each member brings their own unique brand of organized chaos to our quantum gaming revolution.
          </p>
        </section>

        {/* Team Grid */}
        <section style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="fade-in-up"
                style={{
                  ...glassStyle,
                  padding: '2rem',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  transform: hoveredMember === index ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                  animationDelay: `${0.6 + (index * 0.1)}s`,
                  opacity: 0
                }}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <div 
                    className={hoveredMember === index ? 'wiggle' : ''}
                    style={{
                      fontSize: '3rem',
                      marginRight: '1rem',
                      background: `linear-gradient(135deg, ${member.color}90, ${member.color}60)`,
                      borderRadius: '50%',
                      width: '80px',
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `2px solid ${member.color}`,
                      boxShadow: `0 0 20px ${member.color}40`
                    }}
                  >
                    {member.emoji}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.4rem',
                      color: 'white',
                      marginBottom: '0.5rem',
                      fontWeight: '600'
                    }}>
                      {member.name}
                    </h3>
                    <p style={{
                      color: member.color,
                      fontSize: '1rem',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      {member.role}
                    </p>
                  </div>
                </div>
                
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {member.bio}
                </p>
                
                <div style={{
                  padding: '1rem',
                  background: `linear-gradient(135deg, ${member.color}20, ${member.color}10)`,
                  borderRadius: '12px',
                  border: `1px solid ${member.color}40`
                }}>
                  <p style={{
                    color: member.color,
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    🎭 Fun Fact:
                  </p>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '0.9rem',
                    fontStyle: 'italic'
                  }}>
                    {member.funFact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Company Story */}
        <section style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '4rem 2rem'
        }}>
          <div style={glassStyle}>
            <div style={{ padding: '3rem' }}>
              <h2 className="text-gradient" style={{
                fontSize: '2.5rem',
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                Our Completely Serious Origin Story
              </h2>
              <div style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.8',
                textAlign: 'center'
              }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  It all started when Dr. Noodleton accidentally spilled quantum coffee ☕ on a Tic-Tac-Toe grid 
                  during a particularly intense breakfast meeting. The resulting interdimensional rift revealed 
                  that traditional gaming was living in the stone age.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Professor Giggles immediately recognized the pancake-like properties of the quantum spillage, 
                  while Captain Whiskers noted how the bubbles formed perfect user interface elements. 
                  Sir Banana's taco expertise proved crucial in folding spacetime into manageable gaming sessions.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible when you combine advanced technology 
                  with absolutely ridiculous job titles. Because if you're going to revolutionize gaming, 
                  you might as well have fun doing it! 🚀
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          marginBottom: '2rem'
        }}>
          <h3 className="text-gradient" style={{
            fontSize: '2rem',
            marginBottom: '1rem'
          }}>
            Want to Join Our Circus? 🎪
          </h3>
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '1.2rem',
            marginBottom: '2rem'
          }}>
            We're always looking for more wonderfully weird people to join our mission!
          </p>
          <Link href="/" className="glass-button">
            <span className="text-gradient">Back to the Madness</span>
          </Link>
        </section>

        {/* Careers Section */}
        <section style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 2rem 4rem 2rem'
        }}>
          <div style={glassStyle}>
            <div style={{ padding: '3rem' }}>
              <h2 className="text-gradient" style={{
                fontSize: '2.5rem',
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                🎯 Internship Opportunities
              </h2>
              <div style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.8',
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  We absolutely LOVE hiring interns! 💕 There's nothing quite like the enthusiasm of bright young minds 
                  who are eager to revolutionize the gaming industry. Plus, we love to pay them nothing! 🎉
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  But seriously, what we lack in monetary compensation, we make up for in:
                  <br />• Exposure to cutting-edge quantum pancake technology 🥞
                  <br />• Free access to our sock puppet therapy sessions 🧦
                  <br />• All the cosmic jellybeans you can eat* 🍭
                  <br />• The opportunity to debug code using interpretive dance 💃
                </p>
                <p style={{ 
                  fontSize: '0.8rem', 
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontStyle: 'italic',
                  marginBottom: '2rem'
                }}>
                  *Jellybeans may or may not exist in this dimension
                </p>
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem'
              }}>
                {[
                  {
                    title: "Bubble Debugging Intern",
                    responsibilities: ["Pop bubbles containing bugs", "Maintain soap-to-code ratio", "Train rubber ducks in advanced debugging"],
                    requirements: ["Must own at least 3 rubber ducks", "Proficiency in Bubble Script", "Ability to blow perfect circles"],
                    color: "#06ffa5"
                  },
                  {
                    title: "Quantum Taco Folder",
                    responsibilities: ["Fold tacos in superposition", "Maintain crispiness across dimensions", "Prevent taco shell collapse"],
                    requirements: ["PhD in Mexican Cuisine Physics", "Can exist in multiple states", "Lactose tolerance optional"],
                    color: "#ef4444"
                  },
                  {
                    title: "Professional Sock Whisperer",
                    responsibilities: ["Communicate with AI sock puppets", "Mediate cotton-polyester disputes", "Organize sock drawer algorithms"],
                    requirements: ["Fluent in Laundry", "Matching socks not required", "Must understand sock psychology"],
                    color: "#f97316"
                  }
                ].map((job, index) => (
                  <div key={index} style={{
                    padding: '1.5rem',
                    background: `linear-gradient(135deg, ${job.color}15, ${job.color}05)`,
                    borderRadius: '16px',
                    border: `1px solid ${job.color}30`,
                    backdropFilter: 'blur(10px)'
                  }}>
                    <h4 style={{
                      color: job.color,
                      fontSize: '1.2rem',
                      marginBottom: '1rem',
                      fontWeight: '600'
                    }}>
                      {job.title}
                    </h4>
                    
                    <div style={{ marginBottom: '1rem' }}>
                      <h5 style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: '0.9rem',
                        marginBottom: '0.5rem',
                        fontWeight: '600'
                      }}>
                        Responsibilities:
                      </h5>
                      <ul style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.8rem',
                        paddingLeft: '1rem'
                      }}>
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx} style={{ marginBottom: '0.25rem' }}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: '0.9rem',
                        marginBottom: '0.5rem',
                        fontWeight: '600'
                      }}>
                        Requirements:
                      </h5>
                      <ul style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.8rem',
                        paddingLeft: '1rem'
                      }}>
                        {job.requirements.map((req, idx) => (
                          <li key={idx} style={{ marginBottom: '0.25rem' }}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h4 style={{
                  color: '#00d4ff',
                  fontSize: '1.3rem',
                  marginBottom: '1rem'
                }}>
                  Ready to Work for Free? 🎊
                </h4>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: '1.5rem',
                  fontSize: '1rem'
                }}>
                  Send us your resume, a cover letter written entirely in emojis, and a video of you 
                  explaining quantum mechanics using only kitchen utensils.
                </p>
                <button 
                  onClick={() => alert('Please send your application to: careers@definitelynotfake.tictactoe\n\nNote: We will respond within 3-5 business centuries.')}
                  className="glass-button"
                  style={{ 
                    fontSize: '1rem',
                    padding: '16px 32px',
                    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(179, 71, 217, 0.2))'
                  }}
                >
                  <span className="text-gradient">Apply Now! 🚀</span>
                </button>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontSize: '0.7rem',
                  marginTop: '1rem',
                  fontStyle: 'italic'
                }}>
                  Equal opportunity employer. We do not discriminate based on dimension of origin, 
                  number of tentacles, or ability to exist in physical reality.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
