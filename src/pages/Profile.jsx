import React from "react";
import "./Profile.css";
import {
  MapPin,
  Briefcase,
  Home,
  MessageSquare,
  UserPlus,
  Heart,
  Clock,
} from "lucide-react";

export default function Profile() {
  return (
    <div className="profile-grid">
      
      <aside className="profile-card">
        <div className="profile-header">
          <div className="avatar-circle">AA</div>
          <h3 className="profile-name">Ashutosh Aman</h3>
          <p className="profile-role">Full-Stack Developer</p>

          <div className="profile-actions">
            <button className="btn-profile btn-primary">
              <UserPlus size={14} style={{ marginRight: "5px" }} /> Follow
            </button>
            <button className="btn-profile btn-secondary">
              <MessageSquare size={14} style={{ marginRight: "5px" }} /> Message
            </button>
          </div>
        </div>

        <hr className="info-divider" />

        <div className="info-list">
          <div className="info-item">
            <Home size={16} /> <span>Hajipur, Bihar, India</span>
          </div>
          <div className="info-item">
            <Briefcase size={16} />{" "}
            <span>Co-Founding Engineer @ Quick Wage</span>
          </div>
          <div className="info-item">
            <MapPin size={16} /> <span>GitHub /ashutoshaman</span>
          </div>
        </div>
      </aside>

     
      <main className="profile-card">
        <h4 className="activity-header">Recent Activities</h4>

        <div className="activity-feed">
         
          <div className="activity-item">
            <p className="activity-text">
              <strong>Ashutosh Aman</strong> started following{" "}
              <strong>Sheryians Coding School</strong>
            </p>
            <div className="activity-time">
              <Clock size={12} style={{ verticalAlign: "middle" }} /> Today 7:51
              pm
            </div>
          </div>

          
          <div className="activity-item">
            <p className="activity-text">
              <strong>Ashutosh</strong> updated the HRMS platform repository to{" "}
              <strong>v2.1.0</strong>
            </p>
            <div className="activity-time">Yesterday 11:30 am</div>
          </div>

          
          <div className="activity-item">
            <p className="activity-text">
              <strong>Ashutosh</strong> liked a post about{" "}
              <strong>Blockchain P2P Security</strong>
            </p>
            <div className="activity-time">2 days ago</div>
          </div>
        </div>
      </main>
    </div>
  );
}
