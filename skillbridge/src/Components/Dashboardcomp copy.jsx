import React from 'react';
import './Dashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2>SkillBridge Admin</h2>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Students</a></li>
          <li><a href="#">Teachers</a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <h1>Welcome, Admin</h1>
        <p className="subtitle">Platform overview and latest updates.</p>

        <div className="admin-widgets">
          <div className="widget-card">
            <h3>Total Courses</h3>
            <p>38</p>
          </div>
          <div className="widget-card">
            <h3>Registered Students</h3>
            <p>1,215</p>
          </div>
          <div className="widget-card">
            <h3>Verified Teachers</h3>
            <p>87</p>
          </div>
          <div className="widget-card">
            <h3>Monthly Revenue</h3>
            <p>$9,400</p>
          </div>
        </div>

        {/* Recent Activity */}
        <section className="admin-section">
          <h2>Recent Platform Activity</h2>
          <table className="activity-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Activity</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Manish Gurung</td>
                <td>Enrolled in "React Mastery"</td>
                <td>Aug 1, 2025</td>
              </tr>
              <tr>
                <td>Sarah Khan</td>
                <td>Uploaded a new course</td>
                <td>Jul 31, 2025</td>
              </tr>
              <tr>
                <td>Elina Shrestha</td>
                <td>Completed "UI Design Basics"</td>
                <td>Jul 30, 2025</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
