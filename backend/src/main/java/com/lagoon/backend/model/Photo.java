package com.lagoon.backend.model;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Le on 4/24/2016.
 */
@Entity
public class Photo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long photoId;
    private String photoName;
    private String title;
    private String description;

//    @CreationTimestamp
//    private Date created;
//
//    @UpdateTimestamp
//    private Date updated;

    @ManyToOne
    private User user;

    @ManyToMany(mappedBy = "likedPhotoList", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<User> likedUserList;

    private int likes;

    @OneToMany(mappedBy = "photo", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Comment> commentList;

    public Long getPhotoId() {
        return photoId;
    }

    public void setPhotoId(Long photoId) {
        this.photoId = photoId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

//    public Date getCreated() {
//        return created;
//    }
//
//    public void setCreated(Date created) {
//        this.created = created;
//    }
//
//    public Date getUpdated() {
//        return updated;
//    }
//
//    public void setUpdated(Date updated) {
//        this.updated = updated;
//    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public List<Comment> getCommentList() {
        return commentList;
    }

    public void setCommentList(List<Comment> commentList) {
        this.commentList = commentList;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<User> getLikedUserList() {
        return likedUserList;
    }

    public void setLikedUserList(List<User> likedUserList) {
        this.likedUserList = likedUserList;
    }

    public String getPhotoName() {
        return photoName;
    }

    public void setPhotoName(String photoName) {
        this.photoName = photoName;
    }
}
