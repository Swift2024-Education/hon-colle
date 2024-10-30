"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

interface Option {
  value: string;
  label: string;
  href: string;
}

const options: Option[] = [
  { value: 'Option1', label: 'infinity', href: '/' },
  { value: 'option2', label: 'Option 2', href: './categorysearch/nextPage' },
  { value: 'option3', label: 'daaaark', href: '/' },
  { value: 'option4', label: 'daaaark', href: '/' },
];

const Dropdown: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0].value);
  const router = useRouter();

  const handleChange = (value: string, href: string) => {
    setSelectedOption(value);
    router.push(href);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="px-4 py-8 text-white bg-blue-500 rounded-lg">
          記事カテゴリの一覧を表示
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {options.map((option) => (
            <Menu.Item key={option.value} as="div">
              {({ active }) => (
                <button
                  onClick={() => handleChange(option.value, option.href)}
                  className={`${
                    active ? 'bg-red-100' : ''
                  } group flex w-full items-center rounded-md px-8 py-3 text-sm text-grey-800`}
                >
                  {option.label}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
      <p className="mt-2 text-sm">選択されたオプション: {selectedOption}</p>
    </Menu>
  );
};

export default Dropdown;
