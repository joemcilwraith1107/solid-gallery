import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import Footer from "./components/Footer";

export default function App() {
	return (
		<Router
			root={(props) => (
				<div class="flex h-screen flex-col justify-between">
					<Suspense>{props.children}</Suspense>
					<Footer />
				</div>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
