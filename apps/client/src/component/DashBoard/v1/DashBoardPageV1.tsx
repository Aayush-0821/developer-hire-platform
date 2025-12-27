import ProjectSection from "./ProjectSection";
import Sidebar from "./Sidebar";

export default function DashBoardPageV1() {
    return (
        <div className="bg-[#121313] min-h-screen flex">
            <Sidebar />
            <main className="flex-1 p-8 overflow-y-auto">
                <ProjectSection />
            </main>
        </div>
    );
}
