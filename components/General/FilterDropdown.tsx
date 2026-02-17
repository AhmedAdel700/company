"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, LucideIcon } from "lucide-react";

interface FilterDropdownOption {
    label: string;
    value: string;
    icon?: LucideIcon;
    desc?: string;
}

interface FilterDropdownProps {
    label: string;
    value: string;
    options: FilterDropdownOption[];
    onChange: (value: string) => void;
    icon?: LucideIcon;
    className?: string;
}

export default function FilterDropdown({
    label,
    value,
    options,
    onChange,
    icon: Icon,
    className = "",
}: FilterDropdownProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const active = options.find((o) => o.value === value) ?? options[0];

    // Close on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const select = (val: string) => {
        onChange(val);
        setOpen(false);
    };

    return (
        <div ref={ref} className={`relative ${className}`}>
            {/* Trigger */}
            <button
                onClick={() => setOpen((p) => !p)}
                className={`w-full flex items-center justify-between gap-2 text-start px-5 py-3 rounded-2xl border font-bold transition-all duration-300 cursor-pointer select-none bg-(--color-background-alt)
            ${open
                        ? "border-(--color-secondary) shadow-lg"
                        : "border-(--border-color) text-(--color-text-primary) hover:border-(--color-secondary)/50"
                    }`}
            >
                <div className="flex items-center gap-2.5">
                    {Icon && <Icon className="w-5 h-5 text-(--color-secondary)" />}
                    <span>{active?.label || label}</span>
                </div>
                <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
            </button>

            {/* Panel */}
            {open && (
                <div
                    className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 rounded-2xl border border-(--border-color) shadow-2xl overflow-hidden"
                    style={{ backgroundColor: "var(--color-background-alt)" }}
                >
                    {/* Header */}
                    <div className="px-5 pt-4 pb-2 border-b border-(--border-color)">
                        <p className="text-[10px] font-black uppercase tracking-[0.15em] text-(--color-text-secondary)">
                            {label}
                        </p>
                    </div>

                    {/* Options */}
                    <ul className="p-2 max-h-64 overflow-y-auto custom-scrollbar">
                        {options.map((opt) => {
                            const isActive = opt.value === value;
                            return (
                                <li key={opt.value}>
                                    <button
                                        onClick={() => select(opt.value)}
                                        className={`w-full flex items-center gap-3 px-3 py-3 my-1 rounded-xl text-left transition-all duration-150 cursor-pointer group
                        ${isActive
                                                ? "bg-(--color-secondary)/12 text-(--color-secondary)"
                                                : "text-(--color-text-primary) hover:bg-(--color-background)"
                                            }`}
                                    >
                                        {/* Icon bubble (Optional) */}
                                        {opt.icon && (
                                            <span
                                                className={`flex items-center justify-center w-8 h-8 rounded-lg shrink-0 transition-all duration-150
                            ${isActive
                                                        ? "bg-(--color-secondary)/20"
                                                        : "bg-(--color-background) group-hover:bg-(--color-secondary)/10"
                                                    }`}
                                            >
                                                <opt.icon
                                                    className={`w-4 h-4 transition-colors duration-150
                              ${isActive ? "text-(--color-secondary)" : "text-(--color-text-secondary) group-hover:text-(--color-secondary)"}`}
                                                />
                                            </span>
                                        )}

                                        {/* Label + desc */}
                                        <span className="flex flex-col min-w-0">
                                            <span className="text-sm font-bold leading-tight">
                                                {opt.label}
                                            </span>
                                            {opt.desc && (
                                                <span
                                                    className={`text-xs leading-tight mt-1 transition-colors
                            ${isActive ? "text-(--color-secondary)/70" : "text-(--color-text-secondary)"}`}
                                                >
                                                    {opt.desc}
                                                </span>
                                            )}
                                        </span>

                                        {/* Active checkmark */}
                                        {isActive && (
                                            <Check className="w-4 h-4 ml-auto shrink-0 text-(--color-secondary)" />
                                        )}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Footer accent */}
                    <div
                        className="h-1 w-full"
                        style={{
                            background:
                                "linear-gradient(to right, transparent, var(--color-secondary), transparent)",
                            opacity: 0.3,
                        }}
                    />
                </div>
            )}
        </div>
    );
}
