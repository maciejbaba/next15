import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <h1>
            Someone&apos;s Computer
            <br />
            Repair Shop
          </h1>
          <address>
            555 Somewhere Street
            <br />
            Somewhere, MA 02134
          </address>
          <p>
            Open Daily: 10am-6pm
            <br />
            Closed Weekends: 3pm-9pm
          </p>
          <Link href="tel:5555555555" className="hover:underline">
            555-555-5555
          </Link>
        </div>
      </main>
    </div>
  );
}
