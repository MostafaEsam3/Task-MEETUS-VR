import React, { useEffect, useState } from 'react';
import { DesktopOutlined, FileOutlined, FilePptOutlined, PieChartOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'; 
import Cookies from "js-cookie"; 
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, to) {
  return {
    key,
    icon,
    label,
    to, 
  };
}

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();  
  const navigate = useNavigate();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
const dataUser = JSON.parse(sessionStorage.getItem('userInfo'));
  // Logout 
  const handleLogout = () => {
    Cookies.remove('token-'); 
    navigate('/'); 
  };
  useEffect(() => {
    const token = Cookies.get('token-');
    if (!token) {
      navigate('/'); 
    }
  }, [navigate]);



  const items = [
    getItem('user-data', '1', <PieChartOutlined />),
    getItem('Logout', '2', <PieChartOutlined />, null),

  ];
  const selectedKey = items.find(item => location.pathname.includes(item.to))?.key || '1';

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" selectedKeys={[selectedKey]} mode="inline">
          {items.map((item) =>
            item.key === '2' ? (
              // Special case for Logout item
              <Menu.Item key={item.key} icon={item.icon} onClick={handleLogout}>
                {item.label}
              </Menu.Item>
            ) : (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.to}>{item.label}</Link>
              </Menu.Item>
            )
          )}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item> {dataUser.name}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <h3> <strong>name:</strong>  {dataUser.name}</h3>
            <h3> <strong>id :</strong> {dataUser.id}</h3>
            <h3><strong>email :</strong>  {dataUser.email}</h3>
            <h3><strong>organization_id :</strong> {dataUser.organization_id}</h3>
            <h3><strong>roles :</strong> {dataUser.roles[0]}</h3>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;

