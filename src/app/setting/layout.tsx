import Link from "next/link";
import React from "react";

type SettingLayout = {
  children: React.ReactNode;
};

const SettingLayout = ({ children }: SettingLayout) => {
  return (
    <main>
      <nav>
        <Link href="/setting/profile" className="underline">
          Profile
        </Link>
      </nav>
      {children}
    </main>
  );
};

export default SettingLayout;
