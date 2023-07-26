import { mmyy, months } from "@/logic/utils";
import { Button, NumberInput, Popover } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";

export interface IDayAndMonthProps {
  date?: Date;
  hasDateChange?: (data: Date) => void;
}

export const DayAndMonthField: React.FC<IDayAndMonthProps> = ({
  date,
  hasDateChange,
}) => {
  const today = new Date();

  const [currentDate, setCurrentDate] = useState<Date>(
    new Date(
      date?.getFullYear() ?? today.getFullYear(),
      date?.getMonth() ?? today.getMonth(),
      1
    )
  );

  const handleChangeYear = (year: number) => {
    if (!year) return;
    const newDate = new Date(currentDate);
    newDate.setFullYear(year);
    setCurrentDate(newDate);
    hasDateChange?.(newDate);
  };

  const handleChangeMonth = (month: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(month);
    setCurrentDate(newDate);
    hasDateChange?.(newDate);
  };

  const increment = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
    hasDateChange?.(newDate);
  };

  const decrement = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
    hasDateChange?.(newDate);
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        className={`
                flex justify-center items-center bg-red-500
                text-white cursor-pointer p-1
            `}
        color="red"
        onClick={decrement}
      >
        <IconChevronLeft size={14} />
      </Button>
      <Popover withArrow>
        <Popover.Target>
          <Button
            className={`
                        bg-gradient-to-r from-indigo-600 to-cyan-600
                        text-white cursor-pointer select-none 
                        w-full sm:w-44 px-3
                    `}
          >
            {mmyy.format(currentDate)}
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          <div className="flex justify-center mb-5">
            <NumberInput
              value={currentDate.getFullYear()}
              onChange={handleChangeYear}
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {months().map((month, i) => {
              const selected = currentDate.getMonth() === i;
              return (
                <Button
                  key={i}
                  color={selected ? "red" : "blue"}
                  className={`${selected ? "bg-red-500" : "bg-blue-500"}`}
                  onClick={() => handleChangeMonth(i)}
                >
                  {month}
                </Button>
              );
            })}
          </div>
        </Popover.Dropdown>
      </Popover>
      <Button
        className={`
                flex justify-center items-center bg-red-500
                text-white cursor-pointer p-1
            `}
        color="red"
        onClick={increment}
      >
        <IconChevronRight size={14} />
      </Button>
    </div>
  );
};
