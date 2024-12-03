"use client";

import Image from "next/image";
import React from "react";
import { cardData } from "./data";
import Link from "next/link";

const Design = () => {
  return (
    <section className="design-section">
      <div className="design">
        {cardData.map(({ id, src, alt, headerOne, headerTwo, icon, href }) => (
          <div key={id} className="design-div">
            <Image
              src={src}
              alt={alt}
              width={327}
              height={250}
              className="design-image"
            />
            <div className="image-text">
              <h1>{headerOne}</h1>
              <Link href={href}>
                <div className="design-click">
                  <h2>{headerTwo}</h2>
                  {icon}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Design;
