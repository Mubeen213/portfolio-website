import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <div className="max-w-2xl space-y-6">
        <h1 className="text-2xl">Hey, I'm Mubeen!</h1>

        <p>
          I'm a software engineer who loves building systems from AI-powered
          automation agents to production-grade infrastructure.
        </p>

        <p>
          I write about tech stuff here:{" "}
          <a
            href="https://blog.mubeen.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            https://blog.mubeen.in/
          </a>
        </p>

        <div className="space-y-1">
          <p>
            Github:{" "}
            <a
              href="https://github.com/Mubeen213"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://github.com/Mubeen213
            </a>
          </p>
          <p>
            X:{" "}
            <a
              href="https://x.com/Mubeen213"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://x.com/Mubeen213
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/md-mubeen-8994311a0"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              www.linkedin.com/in/md-mubeen-8994311a0
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
