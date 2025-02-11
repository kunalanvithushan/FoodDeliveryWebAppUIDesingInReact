import React, { useState, useEffect } from "react";
import "./Admin.css";
import Select from "react-select";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
const Admin = () => {
  const [activeTab, setActiveTab] = useState("staff");

  const renderTabContent = () => {
    switch (activeTab) {
      case "staff":
        return <StaffManagement />;
      case "menu":
        return <MenuManagement />;
      case "promotions":
        return <Promotions />;
      case "reports":
        return <Reports />;
      default:
        return <div>Select a tab to display content</div>;
    }
  };

  return (
    <div className="admin-dashboard body">
      {/* Sidebar */}
      
      <aside className="dashboard-sidebar">
      <h6>Admin Dashboard</h6>
        <div className="sidebar-items">
        <div
          className={`sidebar-item ${activeTab === "staff" ? "active" : ""}`}
          onClick={() => setActiveTab("staff")}
        >
          Staff Management
        </div>
        <div
          className={`sidebar-item ${activeTab === "menu" ? "active" : ""}`}
          onClick={() => setActiveTab("menu")}
        >
          Menu Management
        </div>
        <div
          className={`sidebar-item ${activeTab === "promotions" ? "active" : ""}`}
          onClick={() => setActiveTab("promotions")}
        >
          Promotions
        </div>
        <div
          className={`sidebar-item ${activeTab === "reports" ? "active" : ""}`}
          onClick={() => setActiveTab("reports")}
        >
          Reports
        </div>
        </div>

        <div className="sidebar-item logout" onClick={() => alert("Logged out!")}>
          Logout
        </div>
      </aside>

      {/* Main Content */}
      <div className="dashboard-main">
        <header className="dashboard-header">
          <div className="header-content">
            <div> <h2 className="logo">FeedUrHungry</h2>  </div>
            <div className="profile-menu-wrapper">
              <img
                src="/path-to-admin-profile-image.jpg"
                alt="Admin Profile"
                className="profile-image"
              />
              <p>kunalanvituhsan@gmail.com</p>
            </div>
          </div>
        </header>

        <main className="dashboard-content">{renderTabContent()}</main>
      </div>
    </div>
  );
};

const StaffManagement = () => {
  return (
    <div className="card">
      <h2>Register Staff</h2>
      <form className="form">
        <input type="text" placeholder="Full Name" />
        <input className="email" type="email" placeholder="Email Address" />
        <input type="text" placeholder="Mobile" />
        <input type="text" placeholder="Permanent Address" />
        <input type="text" placeholder="Username" />
        <select placeholder="Role">
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="staff">Staff</option>
        </select>
        <input className="email" type="password" placeholder="Password" />
        <button type="button">Add Staff</button>
      </form>
    </div>
  );
};

const initialCategories = [
  {
    id: 1,
    category_name: "Burgers",
    description: "Delicious and tasty burgers",
  },
  { id: 2, category_name: "Pizzas", description: "Hot and cheesy pizzas" },
];

const initialItems = [
  {
    id: 1,
    item_name: "Cheese Burger",
    description: "A tasty cheese burger",
    base_price: 5.99,
    status: "Available",
    image: "path-to-image.jpg",
    categoryId: 1,
  },
  {
    id: 2,
    item_name: "Veggie Pizza",
    description: "A healthy veggie pizza",
    base_price: 7.99,
    status: "Unavailable",
    image: "path-to-image.jpg",
    categoryId: 2,
  },
];

const initialQuantities = [
  {
    id: 1,
    item_quantity_id: 1,
    item_id: 1,
    size: "Small",
    price: 4.99,
    created_at: "2025-01-01",
    updated_at: "2025-01-01",
    deleted_at: null,
  },
  {
    id: 2,
    item_quantity_id: 2,
    item_id: 1,
    size: "Large",
    price: 7.99,
    created_at: "2025-01-01",
    updated_at: "2025-01-01",
    deleted_at: null,
  },
];

const MenuManagement = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [items, setItems] = useState(initialItems);
  const [quantities, setQuantities] = useState(initialQuantities);

  const [newCategory, setNewCategory] = useState({
    category_name: "",
    description: "",
  });
  const [newItem, setNewItem] = useState({
    item_name: "",
    description: "",
    base_price: "",
    status: "Available",
    image: "",
  });

  const [searchCategory, setSearchCategory] = useState("");
  const [searchItem, setSearchItem] = useState("");

  const [editCategory, setEditCategory] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const [newQuantity, setNewQuantity] = useState({
    item_id: null,
    size: "",
    price: "",
  });

  const [editQuantity, setEditQuantity] = useState(null);

  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    setNewCategory((prev) => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditCategoryChange = (e) => {
    const { name, value } = e.target;
    setEditCategory((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditItemChange = (e) => {
    const { name, value } = e.target;
    setEditItem((prev) => ({ ...prev, [name]: value }));
  };
  const handleQuantityChange = (e) => {
    const { name, value } = e.target;
    setNewQuantity((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditQuantityChange = (e) => {
    const { name, value } = e.target;
    setEditQuantity((prev) => ({ ...prev, [name]: value }));
  };

  const addCategory = () => {
    const newCat = { ...newCategory, id: categories.length + 1 };
    setCategories([...categories, newCat]);
    setNewCategory({ category_name: "", description: "" });
  };

  const addItem = () => {
    const newItemObj = { ...newItem, id: items.length + 1, categoryId: 1 }; // Dynamically assign categoryId as needed
    setItems([...items, newItemObj]);
    setNewItem({
      item_name: "",
      description: "",
      base_price: "",
      status: "Available",
      image: "",
    });
  };
  const itemOptions = items.map((item) => ({
    value: item.id,
    label: item.item_name,
  }));

  const addQuantity = () => {
    if (!newQuantity.item_id) {
      alert("Please select an item for the quantity.");
      return;
    }

    const newQty = {
      ...newQuantity,
      id: quantities.length + 1,
      item_quantity_id: quantities.length + 1,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      deleted_at: null,
    };
    setQuantities([...quantities, newQty]);
    setNewQuantity({ item_id: null, size: "", price: "" });
  };

  const saveEditedQuantity = () => {
    setQuantities(
      quantities.map((quantity) =>
        quantity.id === editQuantity.id ? editQuantity : quantity
      )
    );
    setEditQuantity(null);
  };

  const handleDeleteQuantity = (id) => {
    setQuantities(quantities.filter((quantity) => quantity.id !== id));
  };

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEditCategory = (category) => {
    setEditCategory(category);
  };

  const handleEditItem = (item) => {
    setEditItem(item);
  };

  const saveEditedCategory = () => {
    setCategories(
      categories.map((category) =>
        category.id === editCategory.id ? editCategory : category
      )
    );
    setEditCategory(null);
  };

  const saveEditedItem = () => {
    setItems(items.map((item) => (item.id === editItem.id ? editItem : item)));
    setEditItem(null);
  };

  const filteredCategories = categories.filter((category) =>
    category.category_name.toLowerCase().includes(searchCategory.toLowerCase())
  );

  const filteredItems = items.filter((item) =>
    item.item_name.toLowerCase().includes(searchItem.toLowerCase())
  );

  const categoryOptions = categories.map((category) => ({
    value: category.id,
    label: category.category_name,
  }));

  const handleCategorySelect = (selectedOption) => {
    setNewItem((prev) => ({ ...prev, categoryId: selectedOption.value }));
  };

  return (
    <div className="card">
      <h2>Menu Items</h2>
      {/* Category Management */}
      <div className="section">
        <h3>Categories</h3>
        <input
          type="text"
          placeholder="Search Categories"
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
          className="search-input"
        />
        <div className="scrollable-container">
          <ul>
            {filteredCategories.slice(0, 4).map((category) => (
              <li key={category.id} className="list-item">
                {editCategory?.id === category.id ? (
                  <div>
                    <input
                      type="text"
                      name="category_name"
                      value={editCategory.category_name}
                      onChange={handleEditCategoryChange}
                    />
                    <input
                      type="text"
                      name="description"
                      value={editCategory.description}
                      onChange={handleEditCategoryChange}
                    />
                    <button onClick={saveEditedCategory}>Save</button>
                  </div>
                ) : (
                  <>
                    <div className="content">
                      {category.category_name} - {category.description}
                    </div>
                    <div className="buttons">
                      <button
                        className="edit"
                        onClick={() => handleEditCategory(category)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete"
                        onClick={() => handleDeleteCategory(category.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
        <h4>Add Category</h4>
        <input
          type="text"
          placeholder="Category Name"
          name="category_name"
          value={newCategory.category_name}
          onChange={handleCategoryChange}
        />
        <input
          type="text"
          placeholder="Category Description"
          name="description"
          value={newCategory.description}
          onChange={handleCategoryChange}
        />
        <button className="save" onClick={addCategory}>
          Add Category
        </button>
      </div>
      <br /> <br /> <br />
      <br />
      {/* Item Management */}
      <div className="section">
        <h3>Items</h3>
        <input
          type="text"
          placeholder="Search Items"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          className="search-input"
        />
        <div className="scrollable-container">
          <ul>
            {filteredItems.slice(0, 4).map((item) => (
              <li key={item.id} className="list-item">
                {editItem?.id === item.id ? (
                  <div className="edit-section">
                    <input
                      type="text"
                      name="item_name"
                      value={editItem.item_name}
                      onChange={handleEditItemChange}
                    />
                    <input
                      type="text"
                      name="description"
                      value={editItem.description}
                      onChange={handleEditItemChange}
                    />
                    <input
                      type="number"
                      name="base_price"
                      value={editItem.base_price}
                      onChange={handleEditItemChange}
                    />
                    <select
                      name="status"
                      value={editItem.status}
                      onChange={handleEditItemChange}
                    >
                      <option value="Available">Available</option>
                      <option value="Unavailable">Unavailable</option>
                    </select>
                    <input
                      type="text"
                      name="image"
                      value={editItem.image}
                      onChange={handleEditItemChange}
                      placeholder="Image URL"
                    />
                    <button onClick={saveEditedItem}>Save</button>
                  </div>
                ) : (
                  <>
                    <div className="content">
                      {item.item_name} - {item.description} - ${item.base_price}{" "}
                      - {item.status}
                      <img src={item.image} alt={item.item_name} width="50" />
                    </div>
                    <div className="buttons">
                      <button
                        className="edit"
                        onClick={() => handleEditItem(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete"
                        onClick={() => handleDeleteItem(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
        <h4>Add Item</h4>
        <Select
          options={categoryOptions}
          onChange={handleCategorySelect}
          placeholder="Select a Category"
          value={categoryOptions.find(
            (option) => option.value === newItem.categoryId
          )}
        />
        <input
          type="text"
          placeholder="Item Name"
          name="item_name"
          value={newItem.item_name}
          onChange={handleItemChange}
        />
        <input
          type="text"
          placeholder="Item Description"
          name="description"
          value={newItem.description}
          onChange={handleItemChange}
        />
        <input
          type="number"
          placeholder="Base Price"
          name="base_price"
          value={newItem.base_price}
          onChange={handleItemChange}
        />
        <select
          name="status"
          value={newItem.status}
          onChange={handleItemChange}
        >
          <option value="Available">Available</option>
          <option value="Unavailable">Unavailable</option>
        </select>
        <input
          type="text"
          placeholder="Image URL"
          name="image"
          value={newItem.image}
          onChange={handleItemChange}
        />
        <button className="save" onClick={addItem}>
          Add Item
        </button>
      </div>
      <br />
      {/* Item Quantities */}
      <div className="section">
        <h3>Item Quantities</h3>
        <div className="scrollable-container">
          <ul>
            {quantities.slice(0, 4).map((quantity) => (
              <li key={quantity.id} className="list-item">
                {editQuantity?.id === quantity.id ? (
                  <div className="edit-section">
                    <Select
                      options={itemOptions}
                      onChange={(selectedOption) =>
                        setEditQuantity((prev) => ({
                          ...prev,
                          item_id: selectedOption.value,
                        }))
                      }
                      value={itemOptions.find(
                        (option) => option.value === editQuantity.item_id
                      )}
                      placeholder="Select an Item"
                    />
                    <input
                      type="text"
                      name="size"
                      value={editQuantity.size}
                      onChange={handleEditQuantityChange}
                      placeholder="Size"
                    />
                    <input
                      type="number"
                      name="price"
                      value={editQuantity.price}
                      onChange={handleEditQuantityChange}
                      placeholder="Price"
                    />
                    <button onClick={saveEditedQuantity}>Save</button>
                  </div>
                ) : (
                  <>
                    <div className="content">
                      Item ID: {quantity.item_id} - Size: {quantity.size} -
                      Price: ${quantity.price}
                    </div>
                    <div className="buttons">
                      <button
                        className="edit"
                        onClick={() => setEditQuantity(quantity)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete"
                        onClick={() => handleDeleteQuantity(quantity.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
        <h4>Add Quantity</h4>
        <Select
          options={itemOptions}
          onChange={(selectedOption) =>
            setNewQuantity((prev) => ({
              ...prev,
              item_id: selectedOption.value,
            }))
          }
          value={itemOptions.find(
            (option) => option.value === newQuantity.item_id
          )}
          placeholder="Select an Item"
        />
        <input
          type="text"
          name="size"
          value={newQuantity.size}
          onChange={handleQuantityChange}
          placeholder="Size"
        />
        <input
          type="number"
          name="price"
          value={newQuantity.price}
          onChange={handleQuantityChange}
          placeholder="Price"
        />
        <button className="save" onClick={addQuantity}>
          Add Quantity
        </button>
      </div>
    </div>
  );
};

const items = [
  { value: "Cheese Burger", label: "Cheese Burger" },
  { value: "Veggie Pizza", label: "Veggie Pizza" },
  { value: "Chicken Wings", label: "Chicken Wings" },
  { value: "Pasta", label: "Pasta" },
  { value: "Fish Tacos", label: "Fish Tacos" },
];

const initialPromotions = [
  {
    id: 1,
    promotion_name: "Summer Sale",
    items: [
      {
        item_name: "Cheese Burger",
        discount_percentage: 20,
        start_at: "2025-01-10",
        end_at: "2025-01-20",
      },
    ],
    duration: { start_at: "2025-01-10", end_at: "2025-01-20" },
  },
  {
    id: 2,
    promotion_name: "Winter Deals",
    items: [
      {
        item_name: "Veggie Pizza",
        discount_percentage: 10,
        start_at: "2025-01-15",
        end_at: "2025-01-25",
      },
    ],
    duration: { start_at: "2025-01-15", end_at: "2025-01-25" },
  },
];

const Promotions = () => {
  const [promotions, setPromotions] = useState(initialPromotions);
  const [newPromotion, setNewPromotion] = useState({
    promotion_name: "",
    item_name: "",
    discount_percentage: "",
    start_date: "",
    start_time: "",
    end_date: "",
    end_time: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [editPromotion, setEditPromotion] = useState(null);

  const handleNewPromotionChange = (e) => {
    const { name, value } = e.target;
    setNewPromotion((prev) => ({ ...prev, [name]: value }));
  };

  const addPromotion = () => {
    const newProm = {
      id: promotions.length + 1,
      promotion_name: newPromotion.promotion_name,
      items: [
        {
          item_name: newPromotion.item_name,
          discount_percentage: newPromotion.discount_percentage,
          start_at: `${newPromotion.start_date}T${newPromotion.start_time}`,
          end_at: `${newPromotion.end_date}T${newPromotion.end_time}`,
        },
      ],
      duration: {
        start_at: `${newPromotion.start_date}T${newPromotion.start_time}`,
        end_at: `${newPromotion.end_date}T${newPromotion.end_time}`,
      },
    };
    setPromotions([...promotions, newProm]);
    setNewPromotion({
      promotion_name: "",
      item_name: "",
      discount_percentage: "",
      start_date: "",
      start_time: "",
      end_date: "",
      end_time: "",
    });
  };

  const handleEditPromotionChange = (e) => {
    const { name, value } = e.target;
    setEditPromotion((prev) => ({ ...prev, [name]: value }));
  };

  const saveEditedPromotion = () => {
    const updatedPromotion = {
      ...editPromotion,
      items: [
        {
          ...editPromotion.items[0],
          start_at: `${editPromotion.start_date}T${editPromotion.start_time}`,
          end_at: `${editPromotion.end_date}T${editPromotion.end_time}`,
        },
      ],
      duration: {
        start_at: `${editPromotion.start_date}T${editPromotion.start_time}`,
        end_at: `${editPromotion.end_date}T${editPromotion.end_time}`,
      },
    };

    setPromotions(
      promotions.map((promotion) =>
        promotion.id === editPromotion.id ? updatedPromotion : promotion
      )
    );
    setEditPromotion(null);
  };

  const handleDeletePromotion = (id) => {
    setPromotions(promotions.filter((promotion) => promotion.id !== id));
  };

  const filteredPromotions = promotions.filter((promotion) =>
    promotion.promotion_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="card">
      <h2>Food Promotions</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search Promotions"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Add Promotion Form */}
      <h3>Add Promotion</h3>
      <input
        type="text"
        placeholder="Promotion Name"
        name="promotion_name"
        value={newPromotion.promotion_name}
        onChange={handleNewPromotionChange}
      />
      <input
        type="text"
        placeholder="Item Name"
        name="item_name"
        value={newPromotion.item_name}
        onChange={handleNewPromotionChange}
      />
      <input
        type="number"
        placeholder="Discount Percentage"
        name="discount_percentage"
        value={newPromotion.discount_percentage}
        onChange={handleNewPromotionChange}
      />
      <input
        type="date"
        placeholder="Start Date"
        name="start_date"
        value={newPromotion.start_date}
        onChange={handleNewPromotionChange}
      />
      <input
        type="time"
        placeholder="Start Time"
        name="start_time"
        value={newPromotion.start_time}
        onChange={handleNewPromotionChange}
      />
      <input
        type="date"
        placeholder="End Date"
        name="end_date"
        value={newPromotion.end_date}
        onChange={handleNewPromotionChange}
      />
      <input
        type="time"
        placeholder="End Time"
        name="end_time"
        value={newPromotion.end_time}
        onChange={handleNewPromotionChange}
      />
      <button onClick={addPromotion}>Add Promotion</button>

      {/* Promotions List */}
      <h3>Active Promotions</h3>
      <ul>
        {filteredPromotions.map((promotion) => (
          <li key={promotion.id}>
            {editPromotion?.id === promotion.id ? (
              <div>
                <input
                  type="text"
                  name="promotion_name"
                  value={editPromotion.promotion_name}
                  onChange={handleEditPromotionChange}
                />
                <input
                  type="text"
                  name="item_name"
                  value={editPromotion.items[0].item_name}
                  onChange={handleEditPromotionChange}
                />
                <input
                  type="number"
                  name="discount_percentage"
                  value={editPromotion.items[0].discount_percentage}
                  onChange={handleEditPromotionChange}
                />
                <input
                  type="date"
                  name="start_date"
                  value={editPromotion.start_date}
                  onChange={handleEditPromotionChange}
                />
                <input
                  type="time"
                  name="start_time"
                  value={editPromotion.start_time}
                  onChange={handleEditPromotionChange}
                />
                <input
                  type="date"
                  name="end_date"
                  value={editPromotion.end_date}
                  onChange={handleEditPromotionChange}
                />
                <input
                  type="time"
                  name="end_time"
                  value={editPromotion.end_time}
                  onChange={handleEditPromotionChange}
                />
                <button onClick={saveEditedPromotion}>Save</button>
              </div>
            ) : (
              <div>
                <h4>{promotion.promotion_name}</h4>
                <ul>
                  {promotion.items.map((item, index) => (
                    <li key={index}>
                      {item.item_name} - {item.discount_percentage}% Off -{" "}
                      {item.start_at.replace("T", " ")} to {item.end_at.replace("T", " ")}
                    </li>
                  ))}
                </ul>
                <button
                  className="edit"
                  onClick={() =>
                    setEditPromotion({
                      ...promotion,
                      start_date: promotion.duration.start_at.split("T")[0],
                      start_time: promotion.duration.start_at.split("T")[1],
                      end_date: promotion.duration.end_at.split("T")[0],
                      end_time: promotion.duration.end_at.split("T")[1],
                    })
                  }
                >
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => handleDeletePromotion(promotion.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Reports = () => {
  // State for metrics and chart data
  const [metrics, setMetrics] = useState({
    totalSales: 0,
    totalOrders: 0,
    topItems: [],
    bestCategories: [],
    profit: 0,
    orderTrends: [],
  });

  const [dateFilter, setDateFilter] = useState("weekly");

  // Mock API call to fetch report data
  useEffect(() => {
    // Replace with actual API call
    const fetchData = async () => {
      const data = {
        totalSales: 12000,
        totalOrders: 450,
        profit: 5000,
        topItems: [
          { name: "Cheese Burger", sales: 150 },
          { name: "Veggie Pizza", sales: 120 },
        ],
        bestCategories: [
          { name: "Burgers", revenue: 6000 },
          { name: "Pizzas", revenue: 4000 },
        ],
        orderTrends: [
          { date: "2025-01-01", orders: 50 },
          { date: "2025-01-02", orders: 70 },
          { date: "2025-01-03", orders: 100 },
        ],
      };
      setMetrics(data);
    };

    fetchData();
  }, [dateFilter]);

  // Chart Data
  const barChartData = {
    labels: metrics.bestCategories.map((cat) => cat.name),
    datasets: [
      {
        label: "Revenue by Category",
        data: metrics.bestCategories.map((cat) => cat.revenue),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const pieChartData = {
    labels: metrics.topItems.map((item) => item.name),
    datasets: [
      {
        data: metrics.topItems.map((item) => item.sales),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const lineChartData = {
    labels: metrics.orderTrends.map((trend) => trend.date),
    datasets: [
      {
        label: "Orders Over Time",
        data: metrics.orderTrends.map((trend) => trend.orders),
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
    ],
  };

  return (
    <div className="card">
      <h2>Reports</h2>

      {/* Filters */}
      <div>
        <label htmlFor="dateFilter">Filter by Date Range: </label>
        <select
          id="dateFilter"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      {/* Key Metrics */}
      <div>
        <h3>Key Metrics</h3>
        <p>Total Sales Revenue: ${metrics.totalSales}</p>
        <p>Total Orders Processed: {metrics.totalOrders}</p>
        <p>Total Profit: ${metrics.profit}</p>
      </div>

      {/* Top Sales Items */}
      <div>
        <h3>Top Sales Items</h3>
        <ul>
          {metrics.topItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.sales} Sales
            </li>
          ))}
        </ul>
      </div>

      {/* Visualizations */}
      <div>
        <h3>Visualizations</h3>
        <div>
          <h4>Revenue by Category</h4>
          <Bar data={barChartData} options={{ responsive: true }} />
        </div>

        <div>
          <h4>Top Items Sales Distribution</h4>
          <Pie data={pieChartData} options={{ responsive: true }} />
        </div>

        <div>
          <h4>Order Trends Over Time</h4>
          <Line data={lineChartData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
