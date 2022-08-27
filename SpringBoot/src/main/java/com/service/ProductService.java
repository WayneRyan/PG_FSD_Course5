package com.service;

import com.bean.Product;
import com.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }

    public String storeProduct(Product product) {
        if (productRepository.findById(product.getId()).isPresent()) {
            return "Product already exists.";
        } else {
            productRepository.save(product);
            return "Product saved";
        }
    }

    public String updateProduct(Product product) {
        Optional<Product> p = productRepository.findById(product.getId());
        if (p.isPresent()) {
            Product prod = p.get();
            prod.setName(product.getName());
            prod.setPrice(product.getPrice());
            prod.setUrl(product.getUrl());
            productRepository.saveAndFlush(prod);
            return "Product updated successfully.";
        } else {
            productRepository.save(product);
            return "Product not in database";
        }
    }

    public String deleteProduct(int id) {
        Optional<Product> p = productRepository.findById(id);
        if (p.isPresent()) {
            productRepository.delete(p.get());
            return "Product deleted from database.";
        } else {
            return "Product not in database";
        }
    }
}
