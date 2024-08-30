import mock from '../mock';
import user1 from 'src/assets/images/profile/user-1.jpg';
import user2 from 'src/assets/images/profile/user-2.jpg';
import user3 from 'src/assets/images/profile/user-3.jpg';
import user4 from 'src/assets/images/profile/user-4.jpg';
import user5 from 'src/assets/images/profile/user-5.jpg';

const TicketData = [
  {
    Id: 1,
    ticketTitle: 'National Museum Delhi',
    ticketDescription: 'Basic Package',
    Status: 'Closed',
    Label: 'error',
    thumb: user1,
    AgentName: 'Aarav Kumar',
    Date: '02-12-2021',
    deleted: false,
  },
  {
    Id: 2,
    ticketTitle: 'Salar Jung Museum',
    ticketDescription: 'Standard Package',
    Status: 'Pending',
    Label: 'warning',
    thumb: user2,
    AgentName: 'Priya Gupta',
    Date: '02-15-2020',
    deleted: false,
  },
  {
    Id: 3,
    ticketTitle: 'Chhatrapati Shivaji Maharaj Vastu Sangrahalaya',
    ticketDescription: 'Premium Package',
    Status: 'Open',
    Label: 'success',
    thumb: user3,
    AgentName: 'Rohan Mehta',
    Date: '02-15-2020',
    deleted: false,
  },
  {
    Id: 4,
    ticketTitle: 'Victoria Memorial',
    ticketDescription: 'Basic Package',
    Status: 'Closed',
    Label: 'error',
    thumb: user4,
    AgentName: 'Ishaan Patel',
    Date: '02-15-2020',
    deleted: false,
  },
  {
    Id: 5,
    ticketTitle: 'Indian Museum Kolkata',
    ticketDescription: 'Premium Package',
    Status: 'Closed',
    Label: 'error',
    thumb: user5,
    AgentName: 'Ananya Singh',
    Date: '02-15-2020',
    deleted: false,
  },
  {
    Id: 6,
    ticketTitle: 'Virasat-e-Khalsa',
    ticketDescription: 'Standard Package',
    Status: 'Pending',
    Label: 'warning',
    thumb: user1,
    AgentName: 'Vivek Sharma',
    Date: '02-15-2020',
    deleted: false,
  },
  {
    Id: 7,
    ticketTitle: 'Dr. Bhau Daji Lad Mumbai City Museum',
    ticketDescription: 'Basic Package',
    Status: 'Open',
    Label: 'success',
    thumb: user2,
    AgentName: 'Divya Kulkarni',
    Date: '02-15-2020',
    deleted: false,
  },
  {
    Id: 8,
    ticketTitle: 'Goa State Museum',
    ticketDescription: 'Premium Package',
    Status: 'Closed',
    Label: 'error',
    thumb: user3,
    AgentName: 'Kunal Singh',
    Date: '02-1-2021',
    deleted: false,
  },
];

mock.onGet('/api/data/ticket/TicketData').reply(() => {
  return [200, TicketData];
});
export default TicketData;
