"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"

const events = [
  { date: 10, month: 1, title: "Losar Festival", type: "festival" },
  { date: 15, month: 2, title: "Monlam Prayer", type: "religious" },
  { date: 23, month: 4, title: "Buddha Purnima", type: "religious" },
  { date: 22, month: 5, title: "Saga Dawa", type: "festival" },
  { date: 10, month: 6, title: "Drukpa Kunley", type: "cultural" },
  { date: 15, month: 8, title: "Pang Lhabsol", type: "festival" },
  { date: 18, month: 9, title: "Dashain Festival", type: "cultural" },
  { date: 25, month: 10, title: "Diwali Celebration", type: "cultural" },
  { date: 12, month: 11, title: "Lhabab Duchen", type: "religious" },
]

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export function EventsCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay()
  }

  const navigateMonth = (direction: "prev" | "next") => {
    if (direction === "prev") {
      if (currentMonth === 0) {
        setCurrentMonth(11)
        setCurrentYear(currentYear - 1)
      } else {
        setCurrentMonth(currentMonth - 1)
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0)
        setCurrentYear(currentYear + 1)
      } else {
        setCurrentMonth(currentMonth + 1)
      }
    }
  }

  const getEventForDate = (date: number) => {
    return events.find((event) => event.date === date && event.month === currentMonth)
  }

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "festival":
        return "bg-primary"
      case "religious":
        return "bg-secondary"
      case "cultural":
        return "bg-accent"
      default:
        return "bg-muted"
    }
  }

  const daysInMonth = getDaysInMonth(currentMonth, currentYear)
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Events Calendar
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={() => navigateMonth("prev")}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => navigateMonth("next")}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">
              {months[currentMonth]} {currentYear}
            </h3>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-1 mb-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center text-xs font-medium text-muted-foreground p-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {emptyDays.map((day) => (
              <div key={`empty-${day}`} className="p-2 h-10" />
            ))}

            {days.map((date) => {
              const event = getEventForDate(date)
              const isToday =
                date === new Date().getDate() &&
                currentMonth === new Date().getMonth() &&
                currentYear === new Date().getFullYear()

              return (
                <div
                  key={date}
                  className={`p-2 h-10 text-center text-sm relative cursor-pointer hover:bg-muted/50 rounded ${
                    isToday ? "bg-primary text-primary-foreground font-semibold" : ""
                  }`}
                >
                  {date}
                  {event && (
                    <div
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${getEventTypeColor(event.type)}`}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Upcoming This Month</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {events
              .filter((event) => event.month === currentMonth)
              .sort((a, b) => a.date - b.date)
              .map((event, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div>
                    <div className="font-medium text-sm">{event.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {months[event.month]} {event.date}, {currentYear}
                    </div>
                  </div>
                  <Badge variant="outline" className={`text-xs ${getEventTypeColor(event.type)} text-white`}>
                    {event.type}
                  </Badge>
                </div>
              ))}
            {events.filter((event) => event.month === currentMonth).length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-4">No events scheduled for this month</p>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Event Types</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-sm">Festivals</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-secondary" />
              <span className="text-sm">Religious Ceremonies</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-sm">Cultural Programs</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
