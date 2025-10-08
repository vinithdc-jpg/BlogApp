"use client"
import SubsTableItem from '@/components/AdiminComponents/SubsTableItem'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const page = () => {

  const [email, setEmail] = useState([]);

  const fetchEmails = async () => {
    const response = await axios.get('/api/email');
    setEmail(response.data.emails)
  }

  const deleteEmail = async (mongoId) => {
    const response = await axios.delete('/api/email', {
      params: {
        id: mongoId
      }
    })
    if (response.data.success) {
      toast.success(response.data.msg);
      fetchEmails()
    }
    else {
      toast.error("Error");
    }
  }

  useEffect(() => {
    fetchEmails();
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-12">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        All Subscriptions
      </h1>

      {/* Table Container */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-xl border border-gray-200">
        <table className="w-full border-collapse text-left">
          <thead className="bg-gray-100">
            <tr>
              <th
                scope="col"
                className="py-4 px-6 text-gray-700 font-semibold text-sm uppercase tracking-wide"
              >
                Email Subscription
              </th>
              <th
                scope="col"
                className="py-4 px-6 text-gray-700 font-semibold text-sm uppercase tracking-wide"
              >
                Date
              </th>
              <th
                scope="col"
                className="py-4 px-6 text-gray-700 font-semibold text-sm uppercase tracking-wide text-center"
              >
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {email.map((item, index) => (
              <SubsTableItem
                key={index}
                mongoId={item._id}
                deleteEmail={deleteEmail}
                email={item.email}
                date={item.date}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default page
