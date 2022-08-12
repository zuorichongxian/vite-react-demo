import {
	DesktopOutlined,
	FileOutlined,
	PieChartOutlined,
	TeamOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useNavigate,
} from 'react-router-dom';
import routes from '../src/router';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label?, key?, icon?, children?) {
	return {
		key,
		icon,
		children,
		label,
	};
}

const items = routes.map(route => {
	return {
		key: route.path,
		icon: <PieChartOutlined />,
		label: <Link to={route.path}>{route.path}</Link>,
	};
});

console.log(items);

const App = () => {
	let navigate = useNavigate();
	const [collapsed, setCollapsed] = useState(false);
	const handleMenuClick = ({ key }) => {
		console.log(key);
		// navigate(key);
	};
	return (
		<Layout
			style={{
				minHeight: '100vh',
			}}
		>
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={value => setCollapsed(value)}
			>
				<div className="logo" />
				<Menu
					theme="dark"
					mode="inline"
					items={items}
					onClick={handleMenuClick}
				/>
			</Sider>
			<Layout className="site-layout">
				<Header
					className="site-layout-background"
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
						className="site-layout-background"
						style={{
							padding: 24,
							minHeight: 360,
						}}
					>
						<Link to="/index">index</Link> |
						<Link to="/about">About</Link>
						<Routes>
							{routes.map(route => (
								<Route
									key={route.path}
									path={route.path}
									element={<route.component />}
								></Route>
							))}
						</Routes>
					</div>
				</Content>
				<Footer
					style={{
						textAlign: 'center',
					}}
				>
					Ant Design ©2018 Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	);
};

export default App;
