import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { tenant } from "@/core/tenant/tenant";

const NotFound = () => {
  const location = useLocation();
  const copy = tenant.content.notFound;

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{copy.code}</h1>
        <p className="mb-4 text-xl text-muted-foreground">{copy.title}</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {copy.backCta}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
