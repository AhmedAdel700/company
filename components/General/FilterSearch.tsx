import React from "react";
import { Search, X } from "lucide-react";

interface FilterSearchProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const FilterSearch: React.FC<FilterSearchProps> = ({ value, onChange, placeholder = "Search..." }) => {
    return (
        <div className="relative group">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-(--color-secondary) to-(--color-primary-light) opacity-20 group-focus-within:opacity-40 transition-opacity duration-300" />
            <div className="relative flex items-center gap-3 px-5 py-3.5 bg-(--color-background-alt) border border-(--border-color) rounded-2xl shadow-sm">
                <Search className="w-5 h-5 text-(--color-secondary) shrink-0" />
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="flex-1 bg-transparent outline-none text-(--color-text-primary) placeholder:text-(--color-text-secondary)/60 text-sm font-medium"
                />
                {value && (
                    <button
                        onClick={() =>
                            onChange({
                                target: { value: "" },
                            } as React.ChangeEvent<HTMLInputElement>)
                        }
                        className="text-(--color-text-secondary) hover:text-(--color-secondary) transition-colors cursor-pointer"
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default FilterSearch;
