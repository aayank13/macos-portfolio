"use client";

import React, { useState, useEffect } from "react";
import { Battery, Wifi, Search } from "lucide-react";

declare global {
  interface BatteryManager {
    charging: boolean;
    level: number;
    chargingTime: number;
    dischargingTime: number;
    addEventListener(type: "chargingchange" | "levelchange" | "chargingtimechange" | "dischargingtimechange", listener: EventListener): void;
    removeEventListener(type: "chargingchange" | "levelchange" | "chargingtimechange" | "dischargingtimechange", listener: EventListener): void;
  }

  interface Navigator {
    getBattery(): Promise<BatteryManager>;
  }
}

const MenuBar = () => {
  const [batteryStatus, setBatteryStatus] = useState<{
    level: number | null;
    charging: boolean;
  }>({
    level: null,
    charging: false,
  });

  const currentDate = new Date();
  const formattedTime = currentDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  useEffect(() => {
    const getBatteryStatus = async () => {
      try {
        const battery = await navigator.getBattery();

        const updateBatteryStatus = () => {
          setBatteryStatus({
            level: Math.round(battery.level * 100),
            charging: battery.charging,
          });
        };

        // Initial status
        updateBatteryStatus();

        // Add event listeners for battery status changes
        battery.addEventListener("levelchange", updateBatteryStatus);
        battery.addEventListener("chargingchange", updateBatteryStatus);

        return () => {
          battery.removeEventListener("levelchange", updateBatteryStatus);
          battery.removeEventListener("chargingchange", updateBatteryStatus);
        };
      } catch (error) {
        console.error("Battery status not supported");
      }
    };

    getBatteryStatus();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-8 bg-white/40 backdrop-blur-md shadow-sm flex items-center px-4 text-sm">
      {/* Left Section */}
      <div className="flex items-center space-x-4 flex-1">
        {/* Apple Logo */}
        <span className="font-semibold">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple Logo"
            className="h-4 w-auto"
          />
        </span>

        {/* App Menu Items */}
        <span className="font-medium">Finder</span>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Window</span>
        <span>Help</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center gap-1">
          {batteryStatus.level !== null && (
            <span className="text-xs">{batteryStatus.level}%</span>
          )}
          <Battery
            className={`w-4 h-4 ${
              batteryStatus.charging ? "text-green-500" : ""
            }`}
          />
        </div>
        <Wifi className="w-4 h-4" />
        <Search className="w-4 h-4" />
        <span>{formattedDate}</span>
        <span>{formattedTime}</span>
      </div>
    </div>
  );
};

export default MenuBar;