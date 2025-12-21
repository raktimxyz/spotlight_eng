
export function CardSkeleton() {
    return (
        <div className="card">
            <div className="skeleton skeleton-image"></div>
            <div className="card-body">
                <div className="skeleton skeleton-title w-75"></div>
                <div className="skeleton skeleton-text w-100"></div>
                <div className="skeleton skeleton-text w-50"></div>
            </div>
        </div>
    )
}

export function ListSkeleton() {
    return (
        <div className="list-group-item d-flex align-items-center">
            <div className="skeleton skeleton-avatar me-3"></div>
            <div className="flex-grow-1">
                <div className="skeleton skeleton-title w-50"></div>
                <div className="skeleton skeleton-text w-75"></div>
            </div>
        </div>
    )
}

export function SkeletonNavbar() {
    return (
        <nav className="navbar bg-light px-3 py-2">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="placeholder-glow">
                    <span className="placeholder col-6"></span>
                </div>
                <div className="d-flex gap-3">
                    <span className="placeholder col-2"></span>
                    <span className="placeholder col-2"></span>
                    <span className="placeholder col-2"></span>
                </div>
            </div>
        </nav>
    )
}