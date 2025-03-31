"use client";
import { motion } from "framer-motion";
import { FaCar, FaChargingStation, FaRobot, FaNewspaper } from "react-icons/fa";

export default function MotorNews() {
    return (
      <div style={{ padding: '10px', backgroundColor: '#FFF', color: '#333', minHeight: '100vh', fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <motion.h1 
          style={{ color: '#FF6600', textAlign: 'center', marginBottom: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}>
          <FaNewspaper style={{ marginRight: '10px' }} /> Motor News And Views
        </motion.h1>
        
        <motion.div 
          style={{ padding: '10px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '800px' }}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7, delay: 0.2 }}>
          <FaCar style={{ color: '#FF6600', fontSize: '24px', marginRight: '10px' }} />
          <p style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
            Automakers are launching new models with cutting-edge AI-driven safety features, making driving smarter and safer than ever.
          </p>
        </motion.div>
        
        <motion.div 
          style={{ padding: '10px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '800px' }}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7, delay: 0.4 }}>
          <FaChargingStation style={{ color: '#FF6600', fontSize: '24px', marginRight: '10px' }} />
          <p style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
            EV adoption is soaring with advancements in battery technology, offering longer ranges and faster charging capabilities.
          </p>
        </motion.div>
        
        <motion.div 
          style={{ padding: '10px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '800px' }}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7, delay: 0.6 }}>
          <FaRobot style={{ color: '#FF6600', fontSize: '24px', marginRight: '10px' }} />
          <p style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
            Self-driving technology continues to evolve, aiming to reduce accidents and improve overall road safety.
          </p>
        </motion.div>
        
        <motion.div 
          style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '800px' }}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7, delay: 0.8 }}>
          <FaNewspaper style={{ color: '#FF6600', fontSize: '24px', marginRight: '10px' }} />
          <p style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
            Stay updated with the latest trends in automobile technology, from AI-driven navigation to seamless infotainment systems.
          </p>
        </motion.div>
        <div style={{height:"50px"}}></div>
      </div>
    );
}
