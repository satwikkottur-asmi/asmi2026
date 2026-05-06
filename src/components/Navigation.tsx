import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isTeamPage = location.pathname === "/team";
  const isPrivacyPage = location.pathname === "/privacy";
  const isIndexPage = location.pathname === "/";

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-10">
      {/* Hide logo on index page since headline serves as branding */}
      {isIndexPage ? (
        <div className="font-serif text-2xl" />
      ) : (
        <Link
          to="/"
          className="font-serif text-2xl italic text-foreground transition-opacity hover:opacity-70"
        >
          asmi
        </Link>
      )}

      <div className="flex items-center gap-6">
        {!isIndexPage && (
          <Link
            to="/"
            className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
        )}
        {isIndexPage && (
          <>
            <Link
              to="/team"
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              Team
            </Link>
            <Link
              to="/privacy"
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
