"use client";
import { motion } from "framer-motion";
import { FaLeaf, FaHeartbeat, FaSpa, FaNewspaper } from "react-icons/fa";

export default function WellnessNews() {
    return (
      <div style={{ padding: '10px', backgroundColor: '#FFF', color: '#333', minHeight: '100vh', fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <motion.h1 
          style={{ color: '#FF6600', textAlign: 'center', marginBottom: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}>
          <FaNewspaper style={{ marginRight: '10px' }} /> Wellness News And Insights
        </motion.h1>
        
        <motion.div 
          style={{ padding: '10px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '800px' }}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7, delay: 0.2 }}>
          <FaLeaf style={{ color: '#FF6600', fontSize: '24px', marginRight: '10px' }} />
          <p style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
            Holistic health approaches are gaining popularity, integrating mind, body, and spirit for overall well-being.
          </p>
        </motion.div>
        
        <motion.div 
          style={{ padding: '10px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '800px' }}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7, delay: 0.4 }}>
          <FaHeartbeat style={{ color: '#FF6600', fontSize: '24px', marginRight: '10px' }} />
          <p style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
            Advances in wearable technology help track fitness and health metrics, empowering individuals to take charge of their well-being.
          </p>
        </motion.div>
        
        <motion.div 
          style={{ padding: '10px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '800px' }}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7, delay: 0.6 }}>
          <FaSpa style={{ color: '#FF6600', fontSize: '24px', marginRight: '10px' }} />
          <p style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
            Self-care routines, including meditation and spa therapies, are becoming essential in modern wellness trends.
          </p>
        </motion.div>
        
        <motion.div 
          style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '800px' }}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7, delay: 0.8 }}>
          <FaNewspaper style={{ color: '#FF6600', fontSize: '24px', marginRight: '10px' }} />
          <p style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
            Stay informed on the latest wellness trends, from organic nutrition to stress management techniques.
          </p>
        </motion.div>
        <div style={{height:"50px"}}></div>
      </div>
    );
}
