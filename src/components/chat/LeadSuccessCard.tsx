import { Link } from "react-router-dom";

interface Props {
  firstName: string;
}

const LeadSuccessCard = ({ firstName }: Props) => (
  <div
    className="mx-4 my-3 p-4 rounded-xl text-center"
    style={{
      background: "linear-gradient(135deg, #1a1a1a, #222)",
      border: "1px solid rgba(201,161,53,0.25)",
    }}
  >
    <p className="text-lg mb-1" style={{ color: "hsl(var(--primary))" }}>
      ✦ You're all set, {firstName}!
    </p>
    <p className="text-xs mb-4" style={{ color: "#b8aa8a" }}>
      We just texted you the package details and booking link.
      <br />
      Questions? Call or text us at{" "}
      <a href="tel:9545485809" className="underline">
        954-548-5809
      </a>
    </p>
    <div className="flex flex-col gap-2">
      <Link
        to="/book"
        className="block text-xs font-medium py-2 px-4 rounded-lg text-center"
        style={{ background: "hsl(var(--primary))", color: "#000" }}
      >
        Book Now →
      </Link>
      <Link
        to="/packages"
        className="block text-xs font-medium py-2 px-4 rounded-lg text-center"
        style={{
          border: "1px solid hsl(var(--primary))",
          color: "hsl(var(--primary))",
        }}
      >
        Browse Our Packages →
      </Link>
    </div>
  </div>
);

export default LeadSuccessCard;
