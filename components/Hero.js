"use client";
import { useEffect } from "react";
import Typed from "typed.js";

import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from '@/components/ui/announcement';
import { ArrowUpRightIcon } from 'lucide-react';

const Hero = ({ mouse }) => {
  useEffect(() => {
    new Typed(".typed-subtitle", {
      strings: ["Software Enginner | Full Stack Dev | Embedded Systems Engineer", "Where do i go wrong ?"],
      loop: true,
      typeSpeed: 80,
    });
  }, []);
  return (
    <div className="section started" style={{ height: "96vh" }}>
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content">
            <div className="h-title glitch-effect" data-text="I'm Jehadur Rahman">
              I'm <span>Jehadur Rahman</span>
            </div>
            <span className="typed-subtitle" />

            <div ><a href="https://jehadurre.me/"><Announcement>
      <AnnouncementTag>Check Out My 3D Portfolio</AnnouncementTag>
      <AnnouncementTitle>
        Under Development
        <ArrowUpRightIcon size={16} className="shrink-0 text-muted-foreground" />
      </AnnouncementTitle>
    </Announcement></a></div>
            
          </div>
        </div>
      </div>
      {mouse && (
        <a href="#" className="mouse_btn">
          <span className="ion ion-mouse"></span>
        </a>
      )}
    </div>
  );
};
export default Hero;
