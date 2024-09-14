import Link from "next/link"
import { Search, Building, Award } from "lucide-react"
import {RiBuildingLine} from 'react-icons/ri'

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen pt-16 ">

			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-radial from-slate-50 via-slate-200 to-slate-100">
					<div className=" px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
									Connect Teachers with Their Dream Jobs
								</h1>
								<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
									Scholarhire is the premier job portal for educators. Find your next teaching opportunity or hire the best talent for your institution.
								</p>
							</div>
							<div className="w-full max-w-sm space-y-2">
								<form className="flex space-x-2">
									<input className="max-w-lg flex-1 outline-none border rounded-md p-2 text-sm" placeholder="Enter job title or keyword" type="text" />
									<button
										className="bg-black text-white p-2 rounded-md"
										type="submit">
										Search
									</button>
								</form>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 ">
					<div className=" px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose Scholarhire?</h2>
						<div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
							<div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
								<Search className="h-10 w-10 mb-2" />
								<h3 className="text-xl font-bold text-center">Smart Job Matching</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400 text-center">
									Our AI-powered system matches teachers with the most suitable job openings.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
								<RiBuildingLine className="h-10 w-10 mb-2" />
								<h3 className="text-xl font-bold text-center">Diverse Institutions</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400 text-center">
									Connect with a wide range of educational institutions, from preschools to universities.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
								<Award className="h-10 w-10 mb-2" />
								<h3 className="text-xl font-bold text-center">Career Development</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400 text-center">
									Access resources and tools to enhance your teaching career and professional growth.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className=" px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Trusted by Educators Nationwide</h2>
						<div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
							<div className="flex flex-col items-center space-y-2">
								<span className="text-4xl font-bold">10,000+</span>
								<span className="text-sm text-gray-500 dark:text-gray-400">Job Listings</span>
							</div>
							<div className="flex flex-col items-center space-y-2">
								<span className="text-4xl font-bold">5,000+</span>
								<span className="text-sm text-gray-500 dark:text-gray-400">Schools & Institutions</span>
							</div>
							<div className="flex flex-col items-center space-y-2">
								<span className="text-4xl font-bold">50,000+</span>
								<span className="text-sm text-gray-500 dark:text-gray-400">Registered Teachers</span>
							</div>
							<div className="flex flex-col items-center space-y-2">
								<span className="text-4xl font-bold">95%</span>
								<span className="text-sm text-gray-500 dark:text-gray-400">Satisfaction Rate</span>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 ">
					<div className=" px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Find Your Next Teaching Opportunity?</h2>
								<p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
									Join thousands of educators who have found their dream jobs through Scholarhire.
								</p>
							</div>
							<div className="flex flex-col md:flex-row gap-3">
								<Link href="/signup" className="text-xs md:text-sm px-4 py-2 text-white bg-black border border-black rounded-md">Sign Up for Free</Link>
								<Link href='/jobs' className="text-xs md:text-sm px-4 py-2 text-black bg-white border rounded-md">Learn More</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
			
		</div>
	)
}