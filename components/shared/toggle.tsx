"use client"

import {   DropdownMenu,
    DropdownMenuTrigger,

    DropdownMenuSeparator,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,} from '@/components/ui/dropdown-menu'
import { SunMoon, MoonIcon, SunIcon } from 'lucide-react';

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';

function Toggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) {
      return null;
    }
  
    return (
      <DropdownMenu >
        <DropdownMenuTrigger  asChild>
          <Button
            variant='outline'
            className='w-10 h-10 rounded-full cursor-pointer'
          >
            {theme === 'system' ? (
              <SunMoon  className='cursor-pointer h-[1.4rem]  w-[1.4rem]'/>
            ) : theme === 'dark' ? (
              <MoonIcon className='cursor-pointer h-[1.4rem]  w-[1.4rem]' />
            ) : (
              <SunIcon className='cursor-pointer h-[1.4rem]  w-[1.4rem]' />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
        
          <DropdownMenuSeparator />
 
          <DropdownMenuCheckboxItem
          className='cursor-pointer'
            checked={theme === 'dark'}
            onClick={() => setTheme('dark')}
          >
            Dark
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
          className='cursor-pointer'
            checked={theme === 'light'}
            onClick={() => setTheme('light')}
          >
            Light
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
}

export default Toggle