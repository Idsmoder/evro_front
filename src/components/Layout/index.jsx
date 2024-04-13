import React from 'react';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import { Breadcrumb } from 'antd';


const Layouts = ()=>(
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      
      <Layout>
        <Header
          style={{
            padding: 0,
           
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            Bill is a cat.
           
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
);
export default Layouts;
