import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TINTS = [
  "bg-pink-100",
  "bg-cyan-100",
  "bg-violet-100",
  "bg-orange-100",
  "bg-green-100",
];

const initials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function UserRow({ name, username, isFollowing = false }) {
  const tint = TINTS[name.charCodeAt(0) % TINTS.length];

  return (
    <div className="flex items-center gap-3 py-2">
      <div
        className={`flex size-11 shrink-0 items-center justify-center rounded-full font-bold text-neutral-900 ${tint}`}
      >
        {initials(name)}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-bold">{name}</p>
        <p className="truncate text-[13px] text-muted-foreground">@{username}</p>
      </div>

      {isFollowing ? (
        <Button variant="secondary" size="sm" className="cursor-pointer rounded-full">
          Following
        </Button>
      ) : (
        <Button
          size="sm"
          className="cursor-pointer rounded-full bg-[#fce4ef] font-bold text-[#b3245f] hover:bg-[#f9d0e2] dark:bg-[#3a1a2a] dark:text-[#ff5fa2] dark:hover:bg-[#4a2236]"
        >
          Follow
        </Button>
      )}
    </div>
  );
}

const SUGGESTIONS = [
  { name: "Lara Rae", username: "lara" },
  { name: "Zara Louise", username: "zara" },
  { name: "Ernie", username: "ernie" },
  { name: "Chloe", username: "chloe" },
];

const FOLLOWING = [
  { name: "Naomi", username: "naomi" },
  { name: "Ethan", username: "ethan" },
];

export default function RightPanel() {
  return (
    <aside
      aria-label="Suggestions"
      className="sticky top-0 hidden h-screen overflow-y-auto border-l p-5 xl:block"
    >
      <h2 className="mb-2 text-base font-bold">Who to follow</h2>

      {SUGGESTIONS.map((u) => (
        <UserRow key={u.username} name={u.name} username={u.username} />
      ))}

      <Link
        to="/people"
        className="mt-1 inline-block text-sm font-bold text-[#b3245f] dark:text-[#ff5fa2]"
      >
        See all
      </Link>

      <hr className="my-4" />

      <h2 className="mb-2 text-base font-bold">Following ({FOLLOWING.length})</h2>

      {FOLLOWING.map((u) => (
        <UserRow key={u.username} name={u.name} username={u.username} isFollowing />
      ))}
    </aside>
  );
}