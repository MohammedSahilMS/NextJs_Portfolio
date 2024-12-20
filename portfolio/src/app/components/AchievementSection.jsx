"use client"

import React from 'react'
import dynamic from 'next/dynamic'

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), { ssr: false })

const AchievementList = [
    {
        metric: "Projects",
        value: "45"
    },
    {
        metric: "Years",
        value: "2"
    },
    {
        metric: "Clients",
        value: "2"
    },
    {
        metric: "Skills",
        value: "15",
        postfix: "+"
    },
]

const AchievementSection = () => {
    return (
        <div className='py-8 px-4 sm:py-16 sm:px-8 lg:px-16 xl:gap-16'>
            <div className='border-[#33353F] border rounded-md py-8 px-4 sm:px-8 lg:px-16 flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0'>
                {AchievementList.map((achievement, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center justify-center mx-4'>
                            <h2 className='text-white text-4xl font-bold flex flex-row'>
                                <AnimatedNumbers
                                    includeComma
                                    animateToNumber={parseInt(achievement.value)}
                                    locale="en-US"
                                    className='text-white text-4xl font-bold'
                                    configs={(_, index) => {
                                        return {
                                            mass: 1,
                                            friction: 100,
                                            tension: 140 * (index + 1)
                                        }
                                    }} />
                                {achievement.postfix}
                            </h2>
                            <p className='text-[#ADB7BE] text-base'>{achievement.metric}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AchievementSection
