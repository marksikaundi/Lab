"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Careers() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    jobType: "all",
    location: "all",
    experience: "all",
  });
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      type: "frontend",
      location: "New York, NY",
      experience: "senior",
      description:
        "We are looking for an experienced frontend developer to join our team. You will be responsible for building and maintaining our web application using React, Redux, and other modern web technologies.",
    },
    {
      id: 2,
      title: "Junior Backend Engineer",
      type: "backend",
      location: "San Francisco, CA",
      experience: "junior",
      description:
        "We are seeking a talented junior backend engineer to join our growing team. You will be responsible for designing and implementing scalable and efficient backend systems using Node.js and MongoDB.",
    },
    {
      id: 3,
      title: "Technical Writer",
      type: "writing",
      location: "Remote",
      experience: "mid-level",
      description:
        "We are looking for a skilled technical writer to join our team. You will be responsible for creating and maintaining high-quality documentation for our products and services.",
    },
    {
      id: 4,
      title: "Senior Backend Developer",
      type: "backend",
      location: "Chicago, IL",
      experience: "senior",
      description:
        "We are seeking an experienced backend developer to join our team. You will be responsible for designing and implementing scalable and efficient backend systems using Python and PostgreSQL.",
    },
    {
      id: 5,
      title: "Junior Frontend Developer",
      type: "frontend",
      location: "Remote",
      experience: "junior",
      description:
        "We are looking for a talented junior frontend developer to join our team. You will be responsible for building and maintaining our web application using React, TypeScript, and other modern web technologies.",
    },
    {
      id: 6,
      title: "Technical Writer Intern",
      type: "writing",
      location: "Lusaka, Zambia",
      experience: "entry-level",
      description:
        "We are seeking a motivated and talented technical writer intern to join our team. You will be responsible for creating and maintaining high-quality documentation for our products and services.",
    },
  ];
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const searchValue = search.toLowerCase();
      const typeMatch =
        filters.jobType === "all" || job.type === filters.jobType;
      const locationMatch =
        filters.location === "all" || job.location === filters.location;
      const experienceMatch =
        filters.experience === "all" || job.experience === filters.experience;
      return (
        (job.title.toLowerCase().includes(searchValue) ||
          job.description.toLowerCase().includes(searchValue)) &&
        typeMatch &&
        locationMatch &&
        experienceMatch
      );
    });
  }, [search, filters]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleFilterChange = (field, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Join Our Talented Team 🌎
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          We're always on the lookout for passionate and skilled individuals to
          join our growing team. Explore our open positions and find the perfect
          fit for your career.
        </p>
      </div>
      <div className="mb-8 md:mb-12">
        <div className="flex items-center mb-4">
          <Input
            type="text"
            placeholder="Search for a jobs..."
            value={search}
            onChange={handleSearch}
            className="flex-1 mr-4"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="mr-4">
                <FilterIcon className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>Job Type</DropdownMenuLabel>
              <DropdownMenuRadioGroup
                value={filters.jobType}
                onValueChange={(value) => handleFilterChange("jobType", value)}
              >
                <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="frontend">
                  Frontend
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="backend">
                  Backend
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="writing">
                  Technical Writing
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Location</DropdownMenuLabel>
              <DropdownMenuRadioGroup
                value={filters.location}
                onValueChange={(value) => handleFilterChange("location", value)}
              >
                <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="new-york">
                  New York
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="san-francisco">
                  San Francisco
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="chicago">
                  Chicago
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="remote">
                  Remote
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Experience Level</DropdownMenuLabel>
              <DropdownMenuRadioGroup
                value={filters.experience}
                onValueChange={(value) =>
                  handleFilterChange("experience", value)
                }
              >
                <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="entry-level">
                  Entry-level
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="junior">
                  Junior
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="mid-level">
                  Mid-level
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="senior">
                  Senior
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid gap-8 md:gap-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Frontend Development
          </h2>
          <div className="grid gap-6 md:gap-8">
            {filteredJobs
              .filter((job) => job.type === "frontend")
              .map((job) => (
                <Card key={job.id}>
                  <CardContent>
                    <div className="mb-4">
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        {job.location} - {job.experience} level
                      </p>
                    </div>
                    <p className="mb-6">{job.description}</p>
                    <div className="flex justify-end">
                      <Link
                        href="mailto:recruit@lupleg.website"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-[#C24229] px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#C24229] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                      >
                        Apply
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Backend Development
          </h2>
          <div className="grid gap-6 md:gap-8">
            {filteredJobs
              .filter((job) => job.type === "backend")
              .map((job) => (
                <Card key={job.id}>
                  <CardContent>
                    <div className="mb-4">
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        {job.location} - {job.experience} level
                      </p>
                    </div>
                    <p className="mb-6">{job.description}</p>
                    <div className="flex justify-end">
                      <Link
                        href="mailto:recruit@lupleg.website"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-[#C24229] px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#C24229] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                      >
                        Apply
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Technical Writing
          </h2>
          <div className="grid gap-6 md:gap-8">
            {filteredJobs
              .filter((job) => job.type === "writing")
              .map((job) => (
                <Card key={job.id}>
                  <CardContent>
                    <div className="mb-4">
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        {job.location} - {job.experience} level
                      </p>
                    </div>
                    <p className="mb-6">{job.description}</p>
                    <div className="flex justify-end">
                      <Link
                        href="mailto:recruit@lupleg.website"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-[#C24229] px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#C24229] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                      >
                        Apply
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}
