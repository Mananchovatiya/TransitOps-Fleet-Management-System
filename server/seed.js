import "dotenv/config";
import connectDB from "./config/db.js";
import mongoose from "mongoose";
import Vehicle from "./models/Vehicle.js";
import Driver from "./models/Driver.js";
import Trip from "./models/Trip.js";
import MaintenanceLog from "./models/MaintenanceLog.js";
import FuelLog from "./models/FuelLog.js";
import Expense from "./models/Expense.js";

async function seed() {
  await connectDB();

  console.log("Clearing existing data...");
  await Promise.all([
    Vehicle.deleteMany({}),
    Driver.deleteMany({}),
    Trip.deleteMany({}),
    MaintenanceLog.deleteMany({}),
    FuelLog.deleteMany({}),
    Expense.deleteMany({}),
  ]);

  // 15 Vehicles
  const vehicleData = [
    { regNo: "GJ05JP2218", name: "VAN-05", type: "Van", capacityKg: 1200, odometerKm: 34500, acquisitionCost: 850000, region: "West", status: "Available" },
    { regNo: "GJ01AB1010", name: "TRK-01", type: "Truck", capacityKg: 8000, odometerKm: 120400, acquisitionCost: 3200000, region: "West", status: "Available" },
    { regNo: "GJ01AB1042", name: "TRK-02", type: "Truck", capacityKg: 8000, odometerKm: 98200, acquisitionCost: 3100000, region: "North", status: "Available" },
    { regNo: "GJ06MN3301", name: "MINI-03", type: "Mini", capacityKg: 600, odometerKm: 15600, acquisitionCost: 420000, region: "South", status: "In Shop" },
    { regNo: "GJ27FW7788", name: "4W-01", type: "Four Wheeler", capacityKg: 350, odometerKm: 22100, acquisitionCost: 900000, region: "Central", status: "Retired" },
    { regNo: "GJ01AB1077", name: "TRK-03", type: "Truck", capacityKg: 9000, odometerKm: 76300, acquisitionCost: 3350000, region: "East", status: "Available" },
    { regNo: "GJ05JP2255", name: "VAN-06", type: "Van", capacityKg: 1300, odometerKm: 41200, acquisitionCost: 870000, region: "West", status: "On Trip" },
    { regNo: "GJ18XT4410", name: "MINI-04", type: "Mini", capacityKg: 650, odometerKm: 9800, acquisitionCost: 440000, region: "North", status: "Available" },
    { regNo: "GJ27FW7799", name: "4W-02", type: "Four Wheeler", capacityKg: 380, odometerKm: 18700, acquisitionCost: 910000, region: "Central", status: "Available" },
    { regNo: "GJ01AB1103", name: "TRK-04", type: "Truck", capacityKg: 8500, odometerKm: 154200, acquisitionCost: 3050000, region: "South", status: "In Shop" },
    { regNo: "GJ05JP2299", name: "VAN-07", type: "Van", capacityKg: 1250, odometerKm: 28900, acquisitionCost: 860000, region: "East", status: "Available" },
    { regNo: "GJ18XT4455", name: "MINI-05", type: "Mini", capacityKg: 620, odometerKm: 33400, acquisitionCost: 430000, region: "West", status: "Available" },
    { regNo: "GJ27FW7822", name: "4W-03", type: "Four Wheeler", capacityKg: 360, odometerKm: 45600, acquisitionCost: 895000, region: "North", status: "On Trip" },
    { regNo: "GJ01AB1155", name: "TRK-05", type: "Truck", capacityKg: 9200, odometerKm: 61900, acquisitionCost: 3400000, region: "Central", status: "Available" },
    { regNo: "GJ05JP2333", name: "VAN-08", type: "Van", capacityKg: 1180, odometerKm: 52300, acquisitionCost: 840000, region: "South", status: "Retired" },
  ];
  const vehicles = await Vehicle.create(vehicleData);

  // 15 Drivers
  const driverData = [
    { name: "Ravi Kumar", licenseNo: "GJ0120230001", licenseCategory: "HMV", licenseExpiry: new Date("2027-06-01"), contact: "9876543210", safetyScore: 92, status: "Available" },
    { name: "Meera Shah", licenseNo: "GJ0120230002", licenseCategory: "LMV", licenseExpiry: new Date("2026-12-15"), contact: "9876500000", safetyScore: 88, status: "Available" },
    { name: "Arjun Patel", licenseNo: "GJ0120230003", licenseCategory: "TRANS", licenseExpiry: new Date("2026-08-01"), contact: "9876511111", safetyScore: 76, status: "Available" },
    { name: "Sunita Rao", licenseNo: "GJ0120230004", licenseCategory: "LMV", licenseExpiry: new Date("2025-01-01"), contact: "9876522222", safetyScore: 65, status: "Suspended" },
    { name: "Karan Mehta", licenseNo: "GJ0120230005", licenseCategory: "HMV", licenseExpiry: new Date("2027-03-10"), contact: "9876533333", safetyScore: 95, status: "Available" },
    { name: "Priya Nair", licenseNo: "GJ0120230006", licenseCategory: "LMV", licenseExpiry: new Date("2026-11-20"), contact: "9876544444", safetyScore: 81, status: "On Trip" },
    { name: "Vikram Singh", licenseNo: "GJ0120230007", licenseCategory: "TRANS", licenseExpiry: new Date("2027-01-05"), contact: "9876555555", safetyScore: 90, status: "Available" },
    { name: "Anjali Desai", licenseNo: "GJ0120230008", licenseCategory: "LMV", licenseExpiry: new Date("2026-09-18"), contact: "9876566666", safetyScore: 72, status: "Off Duty" },
    { name: "Rahul Verma", licenseNo: "GJ0120230009", licenseCategory: "HMV", licenseExpiry: new Date("2027-05-22"), contact: "9876577777", safetyScore: 87, status: "Available" },
    { name: "Neha Joshi", licenseNo: "GJ0120230010", licenseCategory: "LMV", licenseExpiry: new Date("2025-04-30"), contact: "9876588888", safetyScore: 58, status: "Suspended" },
    { name: "Manoj Trivedi", licenseNo: "GJ0120230011", licenseCategory: "MCWG", licenseExpiry: new Date("2026-10-12"), contact: "9876599999", safetyScore: 83, status: "Available" },
    { name: "Deepika Iyer", licenseNo: "GJ0120230012", licenseCategory: "TRANS", licenseExpiry: new Date("2027-02-14"), contact: "9876600000", safetyScore: 91, status: "On Trip" },
    { name: "Sanjay Gupta", licenseNo: "GJ0120230013", licenseCategory: "HMV", licenseExpiry: new Date("2026-07-08"), contact: "9876611111", safetyScore: 79, status: "Available" },
    { name: "Pooja Bhatt", licenseNo: "GJ0120230014", licenseCategory: "LMV", licenseExpiry: new Date("2026-06-25"), contact: "9876622222", safetyScore: 84, status: "Off Duty" },
    { name: "Amit Chauhan", licenseNo: "GJ0120230015", licenseCategory: "TRANS", licenseExpiry: new Date("2027-04-17"), contact: "9876633333", safetyScore: 96, status: "Available" },
  ];
  const drivers = await Driver.create(driverData);


  // 15 Trips — mix of Completed / Dispatched / Draft / Cancelled
  const routes = [
    ["Ahmedabad", "Mumbai"], ["Surat", "Pune"], ["Ahmedabad", "Rajkot"], ["Vadodara", "Indore"],
    ["Rajkot", "Ahmedabad"], ["Ahmedabad", "Udaipur"], ["Surat", "Nagpur"], ["Vadodara", "Ahmedabad"],
    ["Ahmedabad", "Jaipur"], ["Rajkot", "Surat"], ["Bhavnagar", "Ahmedabad"], ["Ahmedabad", "Bhopal"],
    ["Surat", "Mumbai"], ["Vadodara", "Rajkot"], ["Ahmedabad", "Delhi"],
  ];
  const tripStatusPlan = [
    "Completed", "Completed", "Completed", "Completed", "Completed",
    "Completed", "Completed", "Dispatched", "Dispatched", "Draft",
    "Draft", "Draft", "Cancelled", "Cancelled", "Completed",
  ];

  const tripDocs = routes.map((r, i) => {
    const vehicle = vehicles[i % vehicles.length];
    const driver = drivers[i % drivers.length];
    const status = tripStatusPlan[i];
    const base = {
      tripNo: i + 1,
      source: r[0],
      destination: r[1],
      vehicle: vehicle._id,
      driver: driver._id,
      cargoKg: 400 + ((i * 337) % 4000),
      plannedDistanceKm: 150 + ((i * 61) % 600),
      revenue: 8000 + ((i * 2917) % 40000),
    };
    if (status === "Completed") {
      base.status = "Completed";
      base.dispatchedAt = new Date(2026, 5, 1 + i);
      base.completedAt = new Date(2026, 5, 2 + i);
      base.endOdometer = vehicle.odometerKm + base.plannedDistanceKm;
      base.fuelConsumedL = Math.round(base.plannedDistanceKm / 5.5);
    } else if (status === "Dispatched") {
      base.status = "Dispatched";
      base.dispatchedAt = new Date(2026, 6, 1 + i);
    } else if (status === "Cancelled") {
      base.status = "Cancelled";
    } else {
      base.status = "Draft";
    }
    return base;
  });
  const trips = await Trip.create(tripDocs);


  // 15 Maintenance logs
  const maintenanceWork = [
    "Oil change", "Brake pad replacement", "Tyre rotation", "Battery replacement", "AC service",
    "Clutch repair", "Suspension check", "Engine tune-up", "Coolant flush", "Wheel alignment",
    "Transmission service", "Headlight replacement", "Exhaust repair", "Fuel filter change", "General inspection",
  ];
  const maintenanceDocs = maintenanceWork.map((title, i) => {
    const vehicle = vehicles[(i * 3) % vehicles.length];
    const isOpen = i % 4 === 0;
    return {
      vehicle: vehicle._id,
      title,
      notes: `${title} for ${vehicle.regNo}`,
      cost: 1500 + ((i * 733) % 9000),
      status: isOpen ? "Open" : "Closed",
      openedAt: new Date(2026, 4, 1 + i),
      closedAt: isOpen ? undefined : new Date(2026, 4, 2 + i),
    };
  });
  await MaintenanceLog.create(maintenanceDocs);


  // 15 Fuel logs
  const fuelDocs = Array.from({ length: 15 }).map((_, i) => {
    const vehicle = vehicles[i % vehicles.length];
    const trip = trips[i % trips.length];
    const liters = 25 + ((i * 7) % 90);
    return {
      vehicle: vehicle._id,
      trip: trip.status === "Completed" ? trip._id : undefined,
      liters,
      cost: liters * 100,
      logDate: new Date(2026, 5, 1 + i),
    };
  });
  await FuelLog.create(fuelDocs);


  // 15 Expenses
  const categories = ["Toll", "Maintenance", "Fuel", "Parking", "Other"];
  const expenseDocs = Array.from({ length: 15 }).map((_, i) => {
    const vehicle = vehicles[(i * 2) % vehicles.length];
    const category = categories[i % categories.length];
    return {
      vehicle: i % 5 === 4 ? undefined : vehicle._id, // a few general/no-vehicle expenses
      category,
      amount: 300 + ((i * 419) % 5000),
      note: `${category} expense #${i + 1}`,
      expenseDate: new Date(2026, 5, 1 + i),
    };
  });
  await Expense.create(expenseDocs);


  console.log("\nSeed complete!");
  console.log(
    `${vehicles.length} vehicles, ${drivers.length} drivers, ${trips.length} trips, ` +
      `${maintenanceDocs.length} maintenance logs, ${fuelDocs.length} fuel logs, ${expenseDocs.length} expenses seeded.`,
  );
  console.log("Sign up your own account(s) via the app's Auth page to log in.\n");

  await mongoose.connection.close();
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
