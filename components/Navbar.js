import Link from "next/link";

function Navbar() {
    console.log(Navbar);
    return (
        <nav>
        <div className="ui container" id>
            <Link class="home" href="/">
                <button>Home</button>
            </Link>
            <Link class="about" href="/about">
                <button>About</button>
            </Link>
            <Link class="shows" href="/shows">
                <button>Shows</button>
            </Link>
            <Link class="music" href="/music">
                <button>Music</button>
            </Link>
            <Link class="connect" href="/connect">
                <button>Connect</button>
            </Link>
        </div>
        </nav>
    )
}

export default Navbar


