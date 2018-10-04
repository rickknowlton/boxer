module.exports = (sequelize, DataTypes) => {
	const Product = sequelize.define("Product", {
		itemName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		currentQuantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		reorderThreshold: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		sellPrice: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		costToGet: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		currentlyUsed: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
		},

	}, {
			paranoid: true,
			timestamps: true
		});

	Product.associate = (models) => {
		Product.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});
	};
	return Product;
};
