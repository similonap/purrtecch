import { StaffMember, getStaff,getStaffMemberById } from "@/api/staff";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Image from 'next/image'

interface StaffProps {
    staffMember: StaffMember
}

interface Paths extends ParsedUrlQuery { 
    id: string
}

export const getStaticPaths: GetStaticPaths<Paths> = async () => {
    let staffMembers = await getStaff();
    let paths = staffMembers.map(member => ({
        params: {
            id: member.id.toString()
        }
    }));
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<StaffProps, Paths> = async (context) => {
    let id = parseInt(context.params?.id as string);
    let staffMember = (await getStaffMemberById(id))!;

    console.log(staffMember);
    return {
        props: {
            staffMember: staffMember
        }
    }
}

const StaffDetail = ({staffMember} : StaffProps) => {
    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <Image className="rounded-full w-64 h-64 mx-auto mb-4" src={staffMember.image} alt={staffMember.name} />
                    <p className="text-xs font-light text-gray-500">{staffMember.role}</p>
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">{staffMember.name}</h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl">{staffMember.description}</p>
                </div>
            </div>
            {staffMember.classes.length > 0 && <div className="mx-auto max-w-screen-sm mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Classes</h2>

                    <ul className="list-disc list-inside text-left">
                        {staffMember.classes.map((classItem) => (
                            <li key={classItem.id} className="text-l text-gray-700 mb-2">
                                <span className="font-semibold">{classItem.name}</span> - {classItem.description} (Semester {classItem.semester})
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </section>
    )
}

export default StaffDetail;