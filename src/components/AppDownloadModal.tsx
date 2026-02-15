import { X, Play, Apple } from "lucide-react";
import { Button } from "./ui/button";

interface AppDownloadModalProps {
  open: boolean;
  onClose: () => void;
}

const AppleIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
);

const AppDownloadModal = ({ open, onClose }: AppDownloadModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/50 backdrop-blur-sm">
      <div className="bg-background rounded-2xl shadow-2xl max-w-[700px] w-full mx-4 p-8 relative flex gap-8 items-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full border flex items-center justify-center hover:bg-secondary transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-3">You want to access for more?</h3>
          <p className="text-muted-foreground text-sm mb-6">
            Download the app to access and know more about our Categories, Sub-categories, Sub-sub-categories and Product details.
          </p>
          <Button className="rounded-full w-full gap-2 text-base py-5">
            Download App
            <Play className="h-4 w-4 fill-current" />
            <AppleIcon className="h-4 w-4" />
          </Button>
        </div>

        <div className="hidden md:block w-[200px] h-[380px] rounded-3xl bg-secondary border-4 border-foreground/10 overflow-hidden flex-shrink-0">
          <div className="h-full w-full bg-muted flex items-center justify-center text-xs text-muted-foreground">
            App Preview
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadModal;
