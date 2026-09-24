"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface IOption {
  value: string;
  label: string;
}

interface SelectDropdownProps {
  options: IOption[];
  onSelect?: (value: IOption["value"]) => void;
  value?: IOption["value"];
}

export default function SelectDropdown({
  options,
  onSelect,
  value = options[0]?.value,
}: SelectDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value);

  const selectedOption = options.find((option) => option.value === selected);

  const handleClick = (value: IOption["value"]) => {
    setSelected(value);
    setIsOpen(false);
    onSelect?.(value);
  };

  return (
    <div className="relative min-w-32">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-2 rounded-lg border border-[#232732] bg-[#13161D] px-3 py-2 text-xs text-white"
      >
        {selectedOption?.label}
        <IoIosArrowDown />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-full space-y-0.5 overflow-hidden rounded-lg border border-[#232732] bg-[#13161D] p-1 shadow-xl">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleClick(option.value)}
              className={`w-full rounded-md px-3 py-2 text-left text-xs text-white hover:bg-[#232732] ${
                option.value === selectedOption?.value ? "bg-[#232732]" : ""
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
